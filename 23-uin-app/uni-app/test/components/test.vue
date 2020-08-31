<template>
	<view>
		组件test
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		// 在实例(父组件)初始化之后，数据观测(data observer)和event/watcher 事件配置之前被调用
		beforeCreate() {
			console.log('component beforeCreate');
		},
		// 实例创建完成之后立即调用，挂载阶段还没开始
		created() {
			console.log('component created');
		},
		// 挂载到实例之上后被调用
		mounted() {
			console.log('component mounted');
		},
		// Vue实例销毁后调用
		destroyed() {
			console.log('component destroyed');
		}
	}
</script>

<style>

</style>
