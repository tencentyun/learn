<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{count}}</h1>
  <h2>{{double}}</h2>
  <button @click="increase">点击</button>
</template>

<script lang="ts">
import { ref, computed } from 'vue';

export default {
  name: 'App',
  components: {
    
  },
  setup(){
    const count = ref(0)
    const increase = () => {
      count.value++
    }
    const double = computed(() => {
      return count.value * 2 
    })
    return {
      count,
      increase,
      double
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
