<template>
  <div class='AdvancedTwo'>
    我是动态组件的内容
  </div>
</template>

<script>
export default {
  name: 'AdvancedTwo',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() { },
  methods: {
    // 动态组件
    // 1. 写法 :is="commponent-name"
    // 2. 需要根据数据，动态渲染的场景。即组件类型不确定
     
  }
}
</script>

<style lang='scss' scoped>

</style>
