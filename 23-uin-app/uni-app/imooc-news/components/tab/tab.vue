<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view class="item" v-for="(item, index) in tabList" :class="{'active': activeIndex === index}" :key="item.name" @click="tabClick(item, index)">{{item.name}}</view>
			</view>
		</scroll-view>
		
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tabList: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		methods:{
			tabClick(item, index){
				this.activeIndex = index
				this.$emit('tab', {
					data: item,
					index: index
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		width: 100%;
		background-color: #fff;
		border: 1px solid #f5f5f5;
		box-sizing: border-box; // 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。  
		.tab-scroll{
			flex: 1;
			overflow: hidden;			// 溢出隐藏
			.tab-scroll-box {
				display: flex;
				align-items: center; // 内容垂直居中
				flex-wrap: nowrap; // 水平内容超出不换行
				height: 45px;
				box-sizing: border-box;
			
				.item {
					padding: 0 10px;
					flex-shrink: 0;
					color: #333;
					font-size: 14px;
					&.active{
						color: $mk-base-color;
					}
			
				}
			}
		}
		.tab-icons{
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			&::after{
				position: absolute;
				content: '';
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
		
	}
</style>
