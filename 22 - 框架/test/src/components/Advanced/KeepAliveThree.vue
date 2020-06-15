<template>
  <div class='KeepAliveThree'>
    KeepAliveThree
  </div>
</template>

<script>
export default {
  name: 'KeepAliveThree',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() { 
    console.log('C mounted')
  },
  methods: {
    // keep-alive
    // 1. 缓存组件
    // 2. 频繁切换，不需要重新渲染
    // 3. Vue常见性能优化
  },
  destroyed(){
    console.log('C destroyed')
  }
}
</script>

<style lang='scss' scoped>

</style>
