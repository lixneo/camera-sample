<template>
	<view class="container">
		<!-- 原生扫码 -->
		<button type="primary" @click="openScan" style="margin-bottom: 10rpx;">扫码</button>
		<button type="primary" @click="gotoWorkOrder">完工单完工日期录入&比对</button>
		<image :src="imagesrc" style="width: 100%;" mode="widthFix"></image>
		<view v-if="imagesrc">
			<!-- #ifdef APP-PLUS -->
			<view>
				<text>扫码结果:</text>
				<text>{{ scanfResult || '识别中...' }}</text>
			</view>
			<!-- #endif -->
			<view>
				<text>ocr结果:</text>
				<text>{{ ocrResult || '识别中...' }}</text>
			</view>
		</view>
		<canvas id="canvas-clipper" canvas-id="canvas-clipper" type="2d"
			:style="{ width: canvasSize.width + 'px', height: canvasSize.height + 'px', position: 'absolute', left: '-500000px', top: '-500000px' }" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 图片路径
			imagesrc: null,
			// 扫描结果
			scanfResult: '',
			// ocr结果
			ocrResult: '',
			canvasSize: {
				width: 300,
				height: 200
			}
		};
	},
	methods: {
		//证件照裁切
		zjzClipper(path) {
			uni.getImageInfo({
				src: path,
				success: (image) => {
					//因为nvue页面使用canvas比较麻烦，所以在此页面上处理图片
					let ctx = uni.createCanvasContext('canvas-clipper', this);

					ctx.drawImage(
						path,
						parseInt(0.07 * image.width),
						parseInt(0.28 * image.height),
						parseInt(0.86 * image.width),
						parseInt(0.40 * image.height),
						0,
						0,
						this.canvasSize.width,
						this.canvasSize.height
					);

					ctx.draw(false, () => {
						uni.canvasToTempFilePath({
							destWidth: this.canvasSize.width * 2,
							destHeight: this.canvasSize.height * 2,
							canvasId: 'canvas-clipper',
							fileType: 'jpg',
							success: (res) => {
								this.savePhoto(res.tempFilePath);
							}
						},
							this
						);
					});
				}
			});
		},
		openScan() {
			uni.scanCode({
				success: (res) => {
					console.log("扫码结果", res);
				}
			})
		},
		gotoWorkOrder() {
			this.imagesrc = null;
			let mapList = [{
				name: '相册',
				methods: 'openPhoto'
			},
			// #ifdef APP-PLUS
			{
				name: '拍摄',
				methods: 'openCamera'
			},
				// #endif
			]
			// 提供用户选择地图的弹窗
			uni.showActionSheet({
				itemList: mapList.map(res => res.name),
				success: (res) => {
					this.ocrResult = '';
					this.scanfResult = '';
					this[mapList[res.tapIndex].methods]()
				}
			});
		},
		openPhoto() {
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'], // 压缩
				sourceType: ['album'],
				success: (res) => {
					this.savePhoto(res.tempFilePaths[0])
				}
			})
		},
		openCamera() {
			uni.navigateTo({
				url: '/pages/camera/index'
			})
			// uni.chooseImage({
			// 	count: 1,
			// 	sizeType: ['original','compressed'],
			// 	sourceType: ['camera'],
			// 	success: (res) => {
			// 		this.savePhoto(res.tempFilePaths[0])
			// 	}
			// })
		},
		//设置图片
		setImage(e) {
			this.zjzClipper(e.path);
		},
		//保存图片
		async savePhoto(path) {
			// 保存图片到手机
			
			// #ifdef APP-PLUS
			uni.saveImageToPhotosAlbum({
				filePath: path,
				success: (res) => {
					console.log("保存图片成功", res);
				}
			})
			// #endif

			this.imagesrc = path;
			// 图片转换为base64
			let base64 = await this.imgToBase64(path)
			// 请求ocr接口
			uni.request({
				url: 'http://192.168.230.85:1224/api/ocr',
				method: 'POST',
				data: {
					base64: base64
				},
				success: (res) => {
					console.log("ocr接口返回结果", res);

					if (res.data.code != 100) {
						this.ocrResult = "未识别到日期信息"
						return
					}
					// 识别日期信息, 默认当前年
					let year = new Date().getFullYear(),month = "",day = "";
					res.data.data.forEach(item => {
						// 检索年
						const yearPattern = /\d{4}年/g;
						const yearMatch = item.text.match(yearPattern);
						if (yearMatch) {
							year = yearMatch[0].split('年')[0];
						}
						// 检索月
						const monthPattern = /\d{1,2}月/g;
						const monthMatch = item.text.match(monthPattern);
						if (monthMatch) {
							month = monthMatch[0].split('月')[0];
						}
						// 检索日
						const dayPattern = /\d{1,2}日/g;
						const dayMatch = item.text.match(dayPattern);
						if (dayMatch) {
							day = dayMatch[0].split('日')[0];
						}
					})
					if (!month || !day) {
						this.ocrResult = "未识别到日期信息"
						return
					}
					this.ocrResult = year + "年" + month + "月" + day + "日"
				}
			})

			// #ifdef APP-PLUS
			// 扫码识别日期信息
			plus.barcode.scan(path, (type, res) => {
				if (type == 0) {
					uni.request({
						url: res,
						method: 'GET',
						header: {
							'Content-Type': 'application/json'
						},
						success: (res) => {
							const datePattern = /\d{4}年\d{1,2}月\d{1,2}日/g;
							const match = res.data.match(datePattern);
							this.scanfResult = match ? match[0] : '日期未找到';
						}
					})
				}
			}, (e) => {
				this.scanfResult = '无法识别此日期信息';
			})
			// #endif
		},
		// 图片转换为base64
		imgToBase64(url) {
			return new Promise((resolve, reject) => {
				// #ifdef MP-WEIXIN
				uni.getFileSystemManager().readFile({
					filePath: url, //选择图片返回的相对路径
					encoding: 'base64', //编码格式
					success: res => { //成功的回调
						resolve(res.data)
					},
					fail: (e) => {
						console.log("图片转换失败");
					}
				})
				// #endif
				// #ifdef H5
				uni.request({
					url: url,
					method: 'GET',
					responseType: 'arraybuffer',
					success: ress => {
						let base64 = uni.arrayBufferToBase64(ress.data); //把arraybuffer转成base64
						resolve(base64)
					},
					fail: (e) => {
						console.log("图片转换失败");
					}
				})
				// #endif
				// #ifdef APP-PLUS
				plus.io.resolveLocalFileSystemURL(url, (entry) => {
					// 可通过entry对象操作test.html文件 
					entry.file((file) => {
						let fileReader = new plus.io.FileReader();
						fileReader.onloadend = (evt) => {
							resolve(evt.target.result.split("base64,")[1])
						}
						fileReader.readAsDataURL(file);
					});
				}, (e) => {
					alert("Resolve file URL failed: " + e.message);
				});
				// #endif
			})
		}
	}
};
</script>

<style lang="scss">
.container {
	padding: 20rpx;
}
</style>