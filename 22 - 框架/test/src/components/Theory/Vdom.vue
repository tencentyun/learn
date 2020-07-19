<template>
  <div class='Vdom'>

    <!-- 用JS模拟DOM结构 -->
    <div id="div1" class="container">
      <p>vdom</p>
      <ul style="font-size: 20px;">
        <li>a</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vdom',
  data() {
    return {
      vdom: {
        tag: 'div',
        props: {
          className: 'container',
          id: 'div1'
        },
        children: [
          {
            tag: 'p',
            children: 'vdom'
          },
          {
            tag: 'ul',
            props: {
              style: 'font-size: 20px'
            },
            children: [
              {
                tag: 'li',
                children: 'a'
              }
            ]
          }
        ]
      }
    }
  },
  components: {},
  mounted() { },
  methods: {
    // 1. vdom是实现vue和React的重要基石
    // 2. diff算法是vdom中最核心、最关键的部分
    // 3. vdom是一个热门话题，也是面试中的热门问题

    // 1. DOM操作非常耗费性能
    // 2. 以前jQuery，可以自行控制DOM操作的时机，手动调整
    // 3. Vue和React是数据驱动视图，如何有效控制DOM操作？

    // 解决方案 - vdom
    // 1. 有了一定复杂度，想减少计算次数比较难
    // 2. 能不能把计算，更多的转移为JS计算？因为JS执行速度很快
    // 3. vdom - 用JS模拟DOM结构，计算出最小的变更，操作DOM

    // 通过学习snabbdom学习vdom
    // 1. 简单强大的vdom库，易学易用
    // 2. Vue参考它实现的vdom和diff
    // 3. Vue3.0重写vdom的代码，优化了性能
    // 4. 但vdom的基本理念不变，面试考点不变
    // 5. React vdom具体实现和Vue也不同, 但不妨碍统一学习
     
  }
}
</script>

<style lang='scss' scoped>

</style>
