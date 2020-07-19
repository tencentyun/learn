<template>
  <div class='Diff'></div>
</template>

<script>
export default {
  name: 'Diff',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() { },
  methods: {
    // 1. diff算法是vdom中最核心、最关键的部分: 把DOM用JS对象来模拟来对比，来找出不同的范围来更新DOM，这个过程就叫diff算法
    // 2. diff算法能在日常使用vue React中体现出来(如key)
    // 3. diff算法是前端热门话题，面试“宠儿”
    // 4. diff即对比，是一个广泛的概念，如linux diff命令、git diff等
    // 5. 两个js对象也可以做diff
    // 6. 两棵树做diff，如这里的 vdom diff
    // 7. patchVnode addVnodes removeVnodes updateChildren(key的重要性)
    // 8. 细节不重要，updateChildren的过程也不重要，不要深究
    // 9. vdom核心概念很重要：h、vnode、patch、diff、key等
    // 10. vdom存在的价值更加重要：数据驱动视图、控制DOM操作
  }
}
</script>

<style lang='scss' scoped>

</style>
