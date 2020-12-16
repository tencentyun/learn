<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FirstComponent :msg="msg" :frame-name="frameName"></FirstComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstComponent from '@/components/FirstComponent.vue'

export default {
  name: 'Home',
  components: {
    FirstComponent
  },
  data(){
    return {
      msg: '这是第一个标准组件',
      frameName: ['Vue', 'React', 'Angular']
    }
  }
}
</script>
