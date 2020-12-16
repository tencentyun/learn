<template>
  <div class="FirstComponent">
    <h1>{{ msg }}</h1>
    <ul class="ul-1">
      <li class="li" v-for="(item, index) in frameName" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  props: {
    msg: String,
    frameName: {
      type: Array,
      require: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.FirstComponent{
  .ul-1{
    .li{
      font-size: 26px;
      color: red;
    }
  }
}
</style>
