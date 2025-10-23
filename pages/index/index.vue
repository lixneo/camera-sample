<template>
	<view class="app-container">
		<fa-steps :active="currentIndex"></fa-steps>
		<swiper :autoplay="false" :disable-touch="true" :current="currentIndex" class="swiper-container">
			<swiper-item>
				<button type="primary" @click="handleScanMachineBarCode" style="margin-bottom: 10rpx;">扫描机器条码</button>
			</swiper-item>
			<swiper-item>
				<button type="primary" @click="handleScanMachineQRCode" style="margin-bottom: 10rpx;">扫描机器二维码</button>
			</swiper-item>
			<swiper-item>
				<button type="primary" @click="captureMachinePlate">拍摄机器铭牌</button>
				<image :src="imagesrc" style="width: 100%;" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<canvas id="canvas-clipper" canvas-id="canvas-clipper" type="2d"
			:style="{ width: canvasSize.width + 'px', height: canvasSize.height + 'px', position: 'absolute', left: '-500000px', top: '-500000px' }" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			imagesrc: null,
			canvasSize: {
				width: 300,
				height: 200
			},
			formData: {
				productionControlNo: '',
				finishDate: ''
			}
		};
	},
	methods: {
		// 扫描机器条码
		handleScanMachineBarCode() {
			uni.scanCode({
				scanType: ['barCode'],
				success: (res) => {
					if (res.result) {
						console.log("条码扫描结果", res.result);

						this.formData.productionControlNo = res.result;
						uni.showToast({
							title: '机器条码扫描成功',
							icon: 'none'
						})
						setTimeout(() => {
							this.currentIndex = 1;
						}, 500);
					}
					else {
						uni.showToast({
							title: '条码扫描失败',
							icon: 'none'
						})
					}
				}
			})
		},
		// 扫描机器二维码
		handleScanMachineQRCode() {
			uni.scanCode({
				scanType: ['qrCode'],
				success: (res) => {
					let dateUrl = res.result;
					if (dateUrl) {
						console.log("二维码扫描结果", dateUrl);

						uni.request({
							url: dateUrl,
							method: 'GET',
							header: {
								'Content-Type': 'application/json'
							},
							success: (res) => {
								console.log("二维码解析结果", res);

								const datePattern = /\d{4}年\d{1,2}月\d{1,2}日/g;
								const match = res.data.match(datePattern);
								if (match) {
									this.formData.finishDate = match[0];
									uni.showToast({
										title: '日期识别成功',
										icon: 'none'
									})
									setTimeout(() => {
										this.currentIndex = 2;
									}, 500);
								} else {
									uni.showToast({
										title: '未识别到日期信息',
										icon: 'none'
									})
								}
							},
							fail: (err) => {
								uni.showToast({
									title: '二维码解析失败',
									icon: 'none'
								})
							}
						})
					} else {
						uni.showToast({
							title: '二维码扫描失败',
							icon: 'none'
						})
					}
				}
			})
		},
		// 拍摄机器铭牌
		captureMachinePlate() {
			uni.navigateTo({
				url: '/pages/camera/index'
			})
		},
		// 拍摄回调函数
		setImage(e) {
			// 证件照裁切
			this.clipper(e.path);
		},
		// 证件照裁切
		clipper(path) {
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
		// 图片上传ocr 识别
		async savePhoto(path) {
			this.imagesrc = path;
			// 图片转换为base64
			let base64 = await this.imgToBase64(path)
			// 请求ocr接口
			uni.request({
				// 本地ocr
				url: 'http://192.168.123.123:1224/api/ocr',
				// 85 ocr
				// url: 'http://192.168.230.85:1224/api/ocr',
				method: 'POST',
				data: {
					base64: base64
				},
				success: (res) => {
					if (res.data.code != 100) {
						uni.showToast({
							title: '未识别到文字信息',
							icon: 'none'
						})
						return
					}
					// 识别日期信息, 默认当前年
					let year = new Date().getFullYear(), month = "", day = "";
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
						// ocr失败，弹窗确认
						uni.showModal({
							title: '请确认',
							content: 'ocr识别失败，请您确认二维码日期是否正确',
							confirmText: '提交工单',
							cancelText: '取消',
							success: (res) => {
								if (res.confirm) {
									this.submitWorkOrder();
								}
							}
						})
						return
					}
					let ocrDate = year + "年" + month + "月" + day + "日"
					if (ocrDate != this.formData.finishDate) {
						// ocr失败，弹窗确认
						uni.showModal({
							title: '请确认',
							content: 'ocr识别日期与完工单日期不一致，请您确认二维码日期是否正确',
							confirmText: '提交工单',
							cancelText: '取消',
							success: (res) => {
								if (res.confirm) {
									this.submitWorkOrder();
								}
							}
						})
						return
					}
					// ocr成功，弹窗确认
					uni.showModal({
						title: '请确认',
						content: 'ocr识别日期与完工单日期一致，是否提交完工单',
						confirmText: '提交工单',
						cancelText: '取消',
						success: (res) => {
							if (res.confirm) {
								this.submitWorkOrder();
							}
						}
					})
				}
			})
		},
		// 提交工单
		submitWorkOrder() {
			uni.request({
				url: 'http://192.168.230.73:8888/yanmar/app/api/check/updateFinishDate',
				method: 'POST',
				data: this.formData,
				success: (res) => {
					if (!res.data.code) {
						uni.showToast({
							title: '完工单提交失败',
							icon: 'none'
						})
						return
					}
					uni.showToast({
						title: '完工单提交成功',
						icon: 'success'
					})

					this.currentIndex = 0;
					this.imagesrc = null;
					this.formData = {
						productionControlNo: '',
						finishDate: ''
					}
				},
				fail: (err) => {
					uni.showToast({
						title: '完工单提交失败',
						icon: 'none'
					})
				}
			})
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

<style scoped>
.app-container {
	padding: 20rpx;
}

.swiper-container {
	height: 70vh;
}
</style>