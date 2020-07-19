<template>
  <div class='Reactive'></div>
</template>

<script>
export default {
  name: 'Reactive',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() {   
    const data = {}
    const name = 'zhangsan'
    // Object.defineProperty(data, 'name', {
    //   get: function (){
    //     console.log('get')
    //     return name
    //   },
    //   set: function (newVal){
    //     console.log('set')
    //     name = newVal
    //   }
    // })
  },
  methods: {
    // Vue响应式: 核心API - Object.defineProperty(Vue3.0启用Proxy)
  }
}
</script>

<style lang='scss' scoped>

</style>
