<template>
  <div class='TemCom'></div>
</template>

<script>
export default {
  name: 'TemCom',
  data() {
    return {
      
    }
  },
  components: {},
  mounted() { 
    // this.withFun()
  },
  methods: {
    // 模板编译
    // 1. 前置知识：JS的with语法
    // 2. vue template complier 将模板编译为render函数
    // 3. 执行render函数生成vnode
    // 4. 模板不是html，有指令、插值、JS表达式，能实现判断、循环
    // 5. html是标签语言，只有JS才能实现判断、循环(图灵完备的)
    // 6. 因此，模板一定是转换为某种JS代码，即编译模板
    // 7. 模板编译为render函数，执行render函数返回vnode
    // 8. 基于vnode在执行patch和diff
    // 9. 使用webpack vue-loader，会在开发环境下编译模板

    // 使用with，能改变{}内自由变量的查找方式
    // 将{}内自由变量，当做obj的属性查找
    // with要慎用，它打破了作用域规则，易读性变差 'with' in strict mode
    // withFun(){
    //   const boj = { 
    //     a: 100,
    //     b: 200
    //   }
    //   with(boj){
    //     console.log(a)
    //     console.log(b)
    //     // console.log(c)
    //   }
      
    // }
  }
}
</script>

<style lang='scss' scoped>

</style>
