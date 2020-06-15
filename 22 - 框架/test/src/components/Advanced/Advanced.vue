<template>
  <div class='Advanced'>
    <!-- 自定义v-model -->
    <!-- <p>{{name}}</p>
    <AdvancedOne v-model="name"></AdvancedOne>
    <NextTick></NextTick> -->
    <!-- <SlotDemo> -->
    <!-- 1. 普通slot -->
    <!-- <div>111</div> -->

    <!-- 2. 具名slot -->
    <!-- <template slot="header">
        <div>具名 header</div>
      </template>
      <template slot="footer">
        <div>具名 footer</div>
      </template> -->

    <!-- 3. 作用域slot -->
    <!-- <template v-slot="slotProps">
        {{slotProps.slotData.name}}
      </template>
    </SlotDemo> -->

    <!-- 动态组件 -->
    <!-- <component :is="AdvancedTwo"></component> -->

    <!-- 异步组件 -->
    <!-- <Async v-if="asyncShow"></Async>
    <button @click="asyncShow = true">异步组件按钮</button> -->

    <!-- keep-alive -->
    <!-- <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>
    <keep-alive>
      <KeepAliveOne v-if="state === 'A'"></KeepAliveOne>
      <KeepAliveTwo v-if="state === 'B'"></KeepAliveTwo>
      <KeepAliveThree v-if="state === 'C'"></KeepAliveThree>
    </keep-alive> -->

    <!-- minix -->
    <Mixin></Mixin>
  </div>
</template>

<script>
import AdvancedOne from './AdvancedOne'
import NextTick from './NextTick'
import SlotDemo from './SlotDemo'
import AdvancedTwo from './AdvancedTwo'
import KeepAliveOne from './KeepAliveOne'
import KeepAliveTwo from './KeepAliveTwo'
import KeepAliveThree from './KeepAliveThree'
import Mixin from './MixinJs'
export default {
  name: 'Advanced',
  data() {
    return {
      name: '张三',
      obj: {
        name: 'lisi'
      },
      AdvancedTwo: 'AdvancedTwo',
      asyncShow: false,
      state: 'A'
    }
  },
  components: {
    AdvancedOne,
    NextTick,
    SlotDemo,
    AdvancedTwo,
    Async: () => import('./Async'),        // 异步组件 用到的时候才会加载 例如大文件可以使用异步加载
    KeepAliveOne,
    KeepAliveTwo,
    KeepAliveThree,
    Mixin
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

    changeState(type){
      this.state = type
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
