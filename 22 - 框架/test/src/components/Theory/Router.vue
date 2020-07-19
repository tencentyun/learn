<template>
  <div class='Router'></div>
</template>

<script>
export default {
  name: 'Router',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() { },
  methods: {
    // 前端路由原理
    // 1. 稍微复杂一点的SPA，都需要路由
    // 2. vue-router也是vue全家桶的标配之一，常用模式：hash和H5 history
    // 3. hash的特点1：hash变化会触发网页跳转，即浏览器的前进、后退
    // 4. hash的特点2：hash变化不会刷新新页面，SPA必须的特点
    // 5. hash的特点3：hash永远不会提交到server端(前端自生自灭)
    // 6. history的特点：用url规范的路由，但跳转时不刷新页面；hist  ory.pushState; window.onpopstate
    
    // 两者选择
    // 1. to B的系统推荐使用hash，简单易用，对url规范不敏感
    // 2. to C的系统，可以考虑选择H5 history，但需要服务端支持
    // 3. 能选择简单的，就别用复杂的，要考虑成本和收益

  }
}
</script>

<style lang='scss' scoped>

</style>
