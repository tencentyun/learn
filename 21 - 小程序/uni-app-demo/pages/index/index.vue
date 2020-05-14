<template>
	<!-- 
	1. 模板书法
	2. 数据绑定
	3. 条件判断
	4. 列表渲染
	5. 基础组件的使用
	6. 自定义组件的使用
	7. 基础 api 的使用
	8. 条件编译
	9. 页面布局
	 -->
	<view class="content border">
		<!-- #ifndef MP-WEIXIN -->
		<btn color="blue" @change="change">
			我是一个按钮
		</btn>
		<!-- #endif -->
	</view>
</template>

<script>
	import btn from "@/components/btn/btn.vue"
	export default {
		data() {
			return {
				
			}
		},
		components:{
			btn
		},
		onLoad() {
			uni.getSystemInfo({
				success(succ) {
					console.log( succ)
				},
				fail(err) {
					console.log(err)
				},
				complete(res) {
					console.log(res)
				},
				// #ifdef
				// #endif
			})
		},
		methods: {
			change(val){
				console.log('我是父组件的事件，输出：' + val)
			}
		}
	}
</script>

<style>
	@import './index.css';
	/* 建议使用flex */
	/* #ifdef */
	/* #endif */
	
	/* body */
	page{
		background-color: #007AFF;
	}
	.content{
		/* px rpx rem vh vw */
		font-size: 12px;
	}
</style>
