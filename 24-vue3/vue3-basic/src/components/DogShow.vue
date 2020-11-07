<template>
  <div width="300px" height="300px">
    <img :src="result && result.message">
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import {defineComponent} from 'vue'

export default defineComponent({
  async setup(){
    const rawData = await axios.get('https://dog.ceo/api/breeds/image/radom')
    return {
      result: rawData.data
    }
  }
});
</script>

<style scoped>

</style>>

