<template>
	<view class="container">
		<button type="primary" @click="gotoWorkOrder">完工单完工日期录入&比对</button>
		<image :src="imagesrc" style="width: 50vw;" mode="widthFix"></image>
		<view v-if="scanfResult">
			<text>扫码结果:</text>
			<text>{{ scanfResult || '未识别到二维码' }}</text>
		</view>
		<view v-if="ocrResult">
			<text>ocr结果:</text>
			<text>{{ ocrResult || '未识别到日期信息' }}</text>
		</view>
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
		};
	},
	methods: {
		gotoWorkOrder() {
			let mapList = [
				{
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
					this[mapList[res.tapIndex].methods]()
				}
			});
		},
		openPhoto() {
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
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
		},
		//设置图片
		setImage(e) {
			this.savePhoto(e.path);
		},
		//保存图片
		async savePhoto(path) {
			uni.showLoading({
				title: '识别中...',
				mask: true
			})
			this.imagesrc = path;
			let base64 = await this.imgToBase64(path)
			uni.request({
				url: 'http://192.168.230.85:1224/api/ocr',
				method: 'POST',
				data: {
					base64: base64
				},
				success: (res) => {
					let ocrResult = "未识别到日期信息"
					let dateResult = res.data.data.find(item => {
						const dateReg = /^\d{4}年\d{1,2}月\d{1,2}日$/;
						const result = dateReg.test(item.text)
						return result ? item : null
					})
					this.ocrResult = dateResult ? dateResult.text : ocrResult
					uni.hideLoading()
				}
			})
			// #ifdef APP-PLUS
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
							uni.hideLoading()
						}
					})
				}
			}, (e) => {
				uni.showToast({
					title: '无法识别此日期信息',
					icon: 'none'
				})
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
					}, fail: (e) => {
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
					}, fail: (e) => {
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