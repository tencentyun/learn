<template>
  <div class='AdvancedOne'>
    <input type="text" 
    :value="text" 
    @input="$emit('change', $event.target.value)"
    >

    <!-- 
      1. 上面的input使用了:value而不是v-mpdel
      2. 上面的change和model.event要对应起来
      3. text属性要对应起来
     -->
  </div>
</template>

<script>
export default {
  name: 'AdvancedOne',
  model: {
    prop: 'text',
    event: 'change'
  },
  props: {
    text: {
      type: String,
      default(){
        return ''
      }
    }
  },
  data() {
    return {
      
    }
  },
  components: {},
  mounted() { },
  methods: {
    
  }
}
</script>

<style lang='scss' scoped>
.AdvancedOne{
  input{
    border: 1px solid #e7e7e7;
  }
}
</style>
