<template>
  <div class='SlotDemo'>
    <!-- <slot>默认内容</slot>
    <slot name="header"></slot>
    <slot name="footer"></slot> -->
    <slot :slotData="obj">
      {{obj.name}}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SlotDemo',
  data() {
    return {
      obj: {
        name: '张三'
      }
    }
  },
  components: {},
  mounted() { },
  methods: {
    
  }
}
</script>

<style lang='scss' scoped>

</style>
