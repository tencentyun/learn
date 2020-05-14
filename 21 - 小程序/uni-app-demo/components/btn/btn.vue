<template>
	<view class="btn-box" :style="{color: color}" @click="onClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			color: {
				type: String,
				default: '#000'
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			onClick(){
				console.log('我是btn组件的事件')
				this.$emit('change', this.color)
			}
		}
	}
</script>

<style>
	.btn-box{
		width: 100px;
		height: 100px;
		border: 1px solid #007AFF;
	}
</style>
