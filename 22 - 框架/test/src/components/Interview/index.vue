<template>
  <div class='index'>
    面试题
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() { },
  methods: {
    // v-show和v-if的区别
    // 1. v-show通过CSS display控制显示和隐藏
    // 2. v-if是组件真正的渲染和销毁，而不是显示和隐藏
    // 3. 频繁切换显示状态用v-show，否则用v-if

    // 为何在v-for中用key
    // 1. 必须用key，且不能是index和random
    // 2. 原理：diff算法中通过tag和key来判断，是否是sameNode
    // 3. 效果：减少渲染次数，提升渲染性能

    // 描述vue组件生命周期(父子组件)
    // 1. 单组件生命周期
    // 2. 父子组件生命周期关系

    // vue组件如何通讯(常见)
    // 1. 父子组件props和this.$emit
    // 2. 自定义事件event.$on  event.$off  event.$emit
    // 3. vuex

    // 双向数据绑定 v-model的实现原理
    // 1. input元素的value = this.name
    // 2. 绑定input事件this.name = $event.target.value
    // 3. data更新触发re-render

    // computed 有何特点
    // 1. 缓存，data不变不会重新计算
    // 2. 提高性能

    // 为何组件data必须是一个return函数？
    // 核心是因为我们定义的这个vue文件编译完成之后是一个class类 每个地方去使用这个类的时候 其实是这个类的实例化 避免造成数据污染
  
    // ajax请求应该放在哪个生命周期
    // 1. mounted DOM渲染完成之后再触发ajax请求
    // 2. JS是单线程，ajax异步获取数据
    // 3. 放在mounted之前没有用，只会让逻辑更加混乱 放在之前以为很早之前就把ajax的数据拿到了 但是只要js没有渲染完 你这个数据你过来之后是异步的还在进程中 也不会有什么提前的效果
  
    // 多个组件有相同的逻辑，如何抽离？
    // 1. mixin, 以及mixin的一些缺点(vue3.0中会做改进)
    // 2. 虽有缺点，但是也不妨碍我们在一些场景里面使用，因为这个世界上也没有什么完美的解决方案，都是一边有问题一边用着。程序员的价值呢就是在这些问题中寻找到一个平衡，然后来做一个优化，要不然所有的东西都是很完美的，那么所有的程序员也要块失业了

    // 何时需要使用keep-alive?
    // 1. 缓存组件，不需要重新渲染
    // 2. 如多个静态tab页的切换
    // 3. 优化性能
  

    // 何时需要使用beforeDestory (以下方法解除内存泄漏问题)
    // 1. 解绑自定义事件 event.$off
    // 2. 清楚定时器
    // 3. 解绑自定义的DOM事件，如window scroll等

    // Vuex中action和mutation有何区别
    // action中异步处理，mutation不可以
    // mutation做原子操作
    // action可以整合多个mutation

    // 如何配置Vue-router异步加载
    // {
    //   path: '/',
    //   component: () => import(/*webpackChunkName: 'feedback' */ '../index,vue')
    // }
  
    // 监听data变化得核心API是什么
    // Object.definedProperty
    // 以及深度监听、监听数据

    // Vue如何监听数组变化
    // 1. Object.definedProperty不能监听数组变化
    // 2. 重新定义原型，重写push pop等方法，实现监听
    // 3. Proxy可以原生支持监听数组变化

    // 简述diff算法过程
    // path(elem, vnode)和patch(vnode, newVnode)
    // patchVnode和addVnodes和removeVnodes
    // updateChildren(key的重要性)

    // Vue为何是异步渲染，$nextTick何用？
    // 异步渲染(以及合并data修改)，以提高渲染性能
    // $nextTick在DOM更新完之后，触发回调

    // Vue常见性能优化方式
    // 1. 合理利用v-show和v-if
    // 2. 合理使用computed：提供了缓存
    // 3. v-for时加key，以及避免和v-if(优先级高)同时使用
    // 4. 自定义事件、DOM事件及时销毁, 避免造成内存泄漏
    // 5. 合理使用异步组件
    // 6. 合理使用keep-alive
    // 7. data层级不要太深
    // 8. 使用vue-loader在开发环境做模板编译(预编译)
    // 9. webpack层面的优化
    // 10. 前端通用的性能优化，如图片懒加载
    // 11. 使用SSR

  }
}
</script>

<style lang='scss' scoped>

</style>
