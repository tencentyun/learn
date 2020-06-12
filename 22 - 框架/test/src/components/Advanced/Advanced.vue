<template>
  <div class='Advanced'>
    <!-- 自定义v-model -->
    <!-- <p>{{name}}</p>
    <AdvancedOne v-model="name"></AdvancedOne>
    <NextTick></NextTick> -->
    <SlotDemo>
      <!-- 1. 普通slot -->
      <!-- <div>111</div> -->

      <!-- 2. 具名slot -->
      <template slot="header">
        <div>具名 header</div>
      </template>
      <template slot="footer">
        <div>具名 footer</div>
      </template>

      <!-- 3. 作用域slot -->
      <template v-slot="slotProps">
        {{slotProps.slotData.name}}
      </template>
    </SlotDemo>
  </div>
</template>

<script>
import AdvancedOne from './AdvancedOne'
import NextTick from './NextTick'
import SlotDemo from './SlotDemo'
export default {
  name: 'Advanced',
  data() {
    return {
      name: '张三',
      obj: {
        name: 'lisi'
      }
    }
  },
  components: {
    AdvancedOne,
    NextTick,
    SlotDemo
  },
  mounted() { },
  methods: {
    // Vue高级特性
    // 1. 自定义组件 v-model
    // 2. $nextTick
    // 3. slot
    // 4. 动态、异步组件
    // 5. keep-alive
    // 6. mixin
  }
}
</script>

<style lang='scss' scoped>

</style>
