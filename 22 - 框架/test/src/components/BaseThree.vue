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
import event from './event'
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

      event.$emit('nothing', item)
    }
  },
  beforeCreate(){
    console.log('子级 beforeCreate')
  },
  created(){
    console.log('子级 created')
  },
  beforeMount(){
    console.log('子级 beforeMount')
  },
  mounted(){
    console.log('子级 mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
