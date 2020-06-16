<template>
  <div class=''></div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() {
    // 动态路由参数传递
    const user = {
      template: '<div>user {{$route.params.id}}</div>'
    }

    const router = new VueRouter({
      routers: [
        {
          // 动态路径参数 以冒号开头。能命中'user/10'等格式的路由
          path: '/user/:id',
          // component: user
          component: () => import(/* webpackChunkName: 'navigator' */ '../components.Navigator')
        }
      ]
    })
   },
  methods: {
    // Vue-router
    // 1. 面试考点并不多(前提是熟悉Vue)
    // 2. 路由模式(hash、h5 history)
    // 3. 路由配置(动态路由、懒加载)
    
    // 路由模式mode
    // 1. hash模式(默认)，如http://abc.com/#/user/10
    // 2. H5 history模式，如http://abc.com/user/20  需要server端支持，因此无特殊需求可选择前者 官方网站有提供server配置说明
    
    
  }
}
</script>

<style lang='scss' scoped>

</style>
