export default {
  data() {
    return {
      city: 'beijing'
    }
  },
  mounted() { },
  methods: {
    // mixin
    // 1. 多个组件有相同的逻辑，抽离出来
    // 2. mixin并不是完美的解决方案，会有一些问题
    // 3. Vue 3提出的Composition API旨在解决这些问题
    showName(){
      console.log(this.name)
    }
  }
}