<template>
  <div class='NextTick'>
    <ul ref="ul1">
      <li v-for="(item, index) in arr" :key="index">{{item}}</li>
    </ul>
    <button @click="add">增加</button>
  </div>
</template>

<script>
export default {
  name: 'NextTick',
  data() {
    return {
      arr: ['a', 'b', 'c']
    }
  },
  components: {},
  mounted() { },
  methods: {
    // $nextTick
    // 1. Vue是异步渲染
    // 2. data改变之后，DOM不会立刻渲染
    // 3. $nextTick会在DOM渲染之后被触发，以获取最新的DOM节点
    add() {
      let time = new Date()
      this.arr.push(time.getTime())
      this.arr.push(time.getTime())
      this.arr.push(time.getTime())

      // 1. 异步渲染，$nextTick待DOM渲染完在回调
      // 2. 页面渲染时会将data的修改做整合，多次data修改只会渲染一次
      this.$nextTick(() => {
        let ulEle = this.$refs.ul1
        console.log(ulEle.childNodes.length)    
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
