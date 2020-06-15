<template>
  <div class='Mixin'>
    <p>{{name}} {{city}}</p>
    <button @click="showName">显示名字</button>
  </div>
</template>

<script>
import mixinDemo from './mixinDemo.js'
export default {
  name: 'Mixin',
  mixins: [mixinDemo],      // mixin
  data() {
    return {
      name: 'zhangsan'
    }
  },
  components: {},
  mounted() { },
  methods: {
    // mixin 
    // 1. 多个组件有相同的逻辑，抽离出来
    // 2. mixin并不是完美的解决方案，会有一些问题
    // 3. Vue 3提出的Composition API旨在解决这些问题
    // 4. 变量来源不明确，不利于阅读
    // 5. 多mixin可能会造成命名冲突
    // 6. mixin和组件可能出现多对多的关系，复杂度较高
  }
}
</script>

<style lang='scss' scoped>

</style>
