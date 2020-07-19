<template>
  <div class=''>
    Vue 原理
    <Reactive></Reactive>
    <TemCom></TemCom>
  </div>
</template>

<script>
import Reactive from './Reactive'
import TemCom from './TemCom'
export default {
  name: '',
  data() {
    return {
      
    }
  },
  components: {
    Reactive,
    TemCom
  },
  mounted() { },
  methods: {
    // 面试为何会考察原理，又用不到？
    // 1. 知其然知其所以然--各行各业通用的道理
    // 2. 了解原理，才能应用的更好(竞争激烈，择优录取)
    // 3. 大厂造轮子(有钱有资源，业务定制，技术KPI)

    // 面试如何考察Vue原理
    // 1. 考察重点，而不是考察细节。掌握好2/8原则(通用原则)。(例如微信你使用20%功能满足了你80%的日常需求；20%的人掌握了80%的人的财富)
    // 2. 和使用相关联的原理，例如vdom、模板渲染
    // 3. 整体流程是否全面、闭环？热门技术是否有深度？

    // Vue原理
    // 组件化、响应式、vdom和diff、模板编译、渲染过程、前端路由
  } 
}
</script>

<style lang='scss' scoped>

</style>
