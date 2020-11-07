<template>
  <teleport to="#modal">
    <div id="center" v-if="isOpen">
      <h2>this is a Modal</h2>
      <button @click="buttonClick">Close</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    isOpen: Boolean
  },
  emits: {
    'close-moadl': null
  },
  setup(props, context){
    const buttonClick = () => {
      context.emit('close-moadl')
    }
    return {
      buttonClick
    }
  }
});
</script>

<style scoped>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>>

