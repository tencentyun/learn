<template>
  <div class='KeepAliveTwo'>
    KeepAliveTwo
  </div>
</template>

<script>
export default {
  name: 'KeepAliveTwo',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() { 
    console.log('B mounted')
  },
  methods: {
    // keep-alive
    // 1. 缓存组件
    // 2. 频繁切换，不需要重新渲染
    // 3. Vue常见性能优化
  },
  destroyed(){
    console.log('B destroyed')
  }
}
</script>

<style lang='scss' scoped>

</style>
