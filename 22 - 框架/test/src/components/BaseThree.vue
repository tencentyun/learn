<template>
  <div>
    <ul>
      <li v-for="item in listInfo" :key="item.title">
        {{item.title}}
        <button @click="deletHander(item)">删除</button>
        </li>
    </ul>
  </div>
</template>

<script>
// 考点
// 1. props和$emit
// 2. 组件间通讯 - 自定义事件
// 3. 组件生命周期
export default {
  name: 'BaseThree',
  props: {
    listInfo: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      
    }
  },
  components: {
    
  },
  methods: {
    deletHander(item){
      this.$emit('deletHander', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
