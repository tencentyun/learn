<template>
	<view class="navbar">

		<!-- 搜索框 -->
		<view class="navbar-fixed">
			<!-- 状态栏 手机信号 电量显示 -->
			<view class="status-bar" :style="{height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏内容 -->
			<view class="navbar-content" :style="{height: navbarContentHeight + 'px', width: navbarContentWidth + 'px'}">
				<view class="navbar-search" :style="{height: searchHeight + 'px'}">
					<view class="icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="text">uni-app/vue</view>
				</view>
			</view>
		</view>

		<!-- 下面的view作用：占位 -->
		<view :style="{height: navbarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,  			// 状态栏高度  默认值给个20
				navbarContentHeight: 45,		// search栏高度 默认值给个45
				navbarContentWidth: 375,		// 默认375是手机屏幕的宽度
				navbarHeight: 45,						// navbar的整体高度
				searchHeight: 30,						// 搜索框的高度
			};
		},
		created() {
			const systemInfo = uni.getSystemInfoSync()			// 获取当前终端的系统信息
			this.statusBarHeight = systemInfo.statusBarHeight		// 获取状态栏的高度 兼容H5和手机
			this.navbarContentWidth = systemInfo.windowWidth		// 屏幕本来就有的宽度
			
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo =  uni.getMenuButtonBoundingClientRect()		// 获取微信小程序胶囊的信息
			const navbarContentHeight = menuButtonInfo.height + (menuButtonInfo.top - this.statusBarHeight)*2  // 计算navbar的高度
			// const navbarContentHeight = (menuButtonInfo.bottom - this.statusBarHeight) + (menuButtonInfo.top - this.statusBarHeight)
			this.navbarContentHeight = navbarContentHeight
			this.navbarContentWidth = menuButtonInfo.left
			this.searchHeight = menuButtonInfo.height
			// #endif
			
			this.navbarHeight = this.statusBarHeight + this.navbarContentHeight		// navbar的整体高度
			
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 99;
			background-color: $mk-base-color;
			.status-bar{
				height: 20px;
			}

			.navbar-content {
				display: flex;
				justify-content: center; // 子元素水平方向 居中
				align-items: center; // 子元素垂直方向 居中
				padding: 0 15px;
				height: 45px;
				box-sizing: border-box; // 子元素在盒内显示  

				.navbar-search {
					display: flex;
					align-items: center; // 子元素在父盒子上居左垂直居中
					width: 100%;
					height: 30px;
					line-height: 30px;
					padding: 0 10px;
					background-color: #fff;
					border-radius: 30px;

					.icon {
						margin-right: 10px;
					}

					.text {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>
