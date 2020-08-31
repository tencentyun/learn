<script>
	// 应用生命周期  只能在APP.vue里面使用
	// 页面生命周期
	// 组件生命周期
	export default {
		// 应用初始化完成 全局只触发一次
		onLaunch: function() {
			console.log('App Launch')
		},
		
		// 应用启动时，或者从后台进入前台触发
		onShow: function() {
			console.log('App Show')
		},
		
		// 应用从前台进入后台触发
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
