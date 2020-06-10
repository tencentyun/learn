<template>
  <div>
    <!-- <BaseOne></BaseOne> -->
    <!-- <BaseTwo></BaseTwo> -->
    <input type="text" v-model="inputVal">
    <button @click="add">增加</button>
    <BaseThree :listInfo="listInfo" @deletHander="deletHander"></BaseThree>
  </div>
</template>

<script>
import BaseOne from './BaseOne'
import BaseTwo from './BaseTwo'
import BaseThree from './BaseThree'
export default {
  name: 'Base',
  data() {
    return {
      inputVal: '',
      listInfo: [{
        title: '标题1'
      }, {
        title: '标题2'
      }]
    }
  },
  components: {
    BaseOne,
    BaseTwo,
    BaseThree
  },
  methods: {
    add(){
      this.listInfo.push({
        title: this.inputVal
      })
    },

    deletHander(val){
      console.log(val)
      // this.listInfo.forEach((item, index) => {
      //   if(item.title === val.title){
      //     this.listInfo.splice(index, 1)
      //   }
      // });
      this.listInfo = this.listInfo.filter(item => item.title !== val.title)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
