<template>
    <view>
        <view class="step-indicator">
            <view class="step" :class="{ active: active >= 1 }">
                <text class="step-num">1</text>
            </view>
            <view class="step-line" :class="{ active: active >= 1 }"></view>
            <view class="step" :class="{ active: active >= 2 }">
                <text class="step-num">2</text>
            </view>
            <view class="step-line" :class="{ active: active >= 2 }"></view>
            <view class="step" :class="{ active: active >= 3 }">
                <text class="step-num">3</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'fa-steps',
    props: {
        active: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.step-indicator {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 40rpx 0;

	.step {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background: #ffffff;
		border: 10rpx solid #DCDCDC;
		display: flex;
		align-items: center;
		justify-content: center;

		&.active {
			background: #ffffff;
			border: 10rpx solid #CA1E30;

			.step-num {
				color: #CA1E30;
			}
		}
	}

	.step-line {
		width: 150rpx;
		border: 1px dashed #DCDCDC;
		margin: 0 20rpx;

		&.active {
			border: 1px dashed #CA1E30;
		}
	}

	.step-num {
		color: #999;
		font-size: 28rpx;
	}
}
</style>