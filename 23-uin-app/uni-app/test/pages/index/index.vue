<template>
	<view class="">
		<button type="default" @click="open">点击</button>
		<test></test>
	</view>
</template>

<script>
	import test from '@/components/test.vue'
	export default{
		components:{
			test
		},
		data (){
			return {
				
			}
		},
		// 监听页面加载是触发onLoad
		onLoad(){
			console.log('index onLoad')
		},
		onTabItemTap(e) {
			console.log(e);
		},
		// 监听页面显示
		onShow() {
			console.log('page onShow')
		},
		// 监听页面初始化渲染完成
		onReady(){
			// 如果渲染速度很快，会在页面进入动画完成之前触发
			console.log('page onReady')
		},
		
		// 监听页面隐藏
		onHide() {
			console.log('page onHide')
		},
		// 监听页面卸载
		onUnload() {
			console.log('page onUnload')
		},
		methods:{
			open(){
				// navigateTo 前一个页面是没有关闭的，只是隐藏了
				// redirectTo 关闭当前的页面 打开新页面
				// uni.navigateTo({
				// 	url: '../test-a/test-a'
				// })
				uni.redirectTo({
					url: '../test-a/test-a'
				})
			}
		}
	}
</script>

<style>
</style>
