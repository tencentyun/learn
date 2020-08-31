<template>
	<view class="home">
		<!-- 自定义组件 easyCom components/组件名/组件名.vue -->
		<navbar></navbar>
		<!-- 自定义组件 标签滚动 -->
		<tab :tabList="tabList" @tab="tab"></tab>
		<!-- 主内容区域 -->
		<view class="scroll">
			<scroll-view class="scroll-list" scroll-y="true" >
				<view>
					<!-- 滚动元素外面最好包裹一个view 避免滚动不了或者样式的问题 -->
					<view v-for="item in 100">
						{{item}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import navbar from "@/components/navbar/navbar.vue"
	import tab from "@/components/tab/tab.vue"
	export default {
		components: {
			navbar,
			tab
		},
		data() {
			return {
				tabList: []
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				// 第一种
				// uniCloud.callFunction({
				// 	name: 'get_label'
				// }).then((res) => {
				// 	const {result} = res
				// 	this.tabList = result.data
				// })

				// 第二种
				// uniCloud.callFunction({
				// 	name: 'get_label',
				// 	success(res) {
				// 		console.log(res);
				// 	}
				// })
 
				// 第三种
				this.$api.get_label({
					name: 'get_label',
				}).then((res) => {
					const { data } = res
					this.tabList = data
				})
			},
			
			tab({data, index}){
				console.log(data, index);
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;			// 垂直排列
		.scroll{
			flex: 1;
			overflow: hidden;
			box-sizing: border-box; // 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
			.scroll-list{
					display: flex;
					flex-direction: column;
					height: 100%;
			}
		}
	}
</style>
