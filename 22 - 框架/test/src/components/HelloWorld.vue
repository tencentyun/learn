<template>
  <div>
    <div>{{num}}</div>
    <div>{{double}}</div>
    <input type="text" v-model="double2">

    <input type="text" v-model="name">
    <input type="text" v-model="info.city">

    <ul>
      <li v-for="(val, key, index) in listObj" :key="key">
        值：{{val}} - 键：{{key}} - 索引：{{index}}
      </li>
    </ul>

    <button @click="click1">点击1</button>
    <button @click="click2(2, $event)">点击2</button>

    <!-- 事件修饰符：阻止默认事件 冒泡等 -->

    <!-- lazy这个修饰符会在光标离开input触发数据的改变 -->
    <input type="text" v-model.lazy="num">

    <!-- trim 过滤输入框首尾的空格-->
    <input type="text" v-model.trim="num">

    <!-- number 先输入数字就会限制只能输入数字；先输入字符串就相当于没有number。注意并不是这个input不能输入字符串-->
    <input type="text" v-model.number="num">

    <!-- prevent 阻止默认行为 相当于调用event.preventDefault() 例如表单的提交 a标签的点击 -->
    <a @click.prevent="doThis"></a>

    <!-- self 变相阻止冒泡 -->
    <div @click.self="doThis"></div>

    <!-- once 变相阻止冒泡 -->
    <div @click.self="doThis"></div>

    <!-- 只触发一次 -->
    <a @click.once="doThis"></a>

    <!-- capture 先执行2在执行1 与正常的冒泡机制相反 -->
    <div @click.capture="test(1)">
      <button @click="test(2)">test</button>
    </div>

    <!-- 提交事件不在重载界面 -->
    <from v-on:submit.prevent="onSubmit"></from>

    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>

    <!-- 即使Alt或Shift被一同按下也会触发 -->
    <button @click.enter="onClick"></button>
    <button @click.ctrl="onClick"></button>
    <button @keyup.ctrl="onClick"></button>

    <!-- 有且只有Ctrl被按下的时候才触发 -->
    <button @click.ctrl.exact="onCtrlClick"></button>
    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button @click.exact="onClick"></button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      num: 10,
      name: '张三',
      info: {
        city: '北京'
      },
      listObj: {
        a: { title: '标题1' },
        b: { title: '标题2' },
        c: { title: '标题3' },
      }
    }
  },
  methods: {
    // v-html: 会有XSS风险，会覆盖子组件

    // watch如何深度监听？watch本身是一个浅监听；watch监听引用类型，拿不到oldVal

    // v-for
    // 1. key不能乱写(例如random或者index, 是没有意义的，要写和业务实体相关的信息)
    // 2. v-for和v-if不能一起写
    click1(event) {
      console.log(event)
      // 1. event是原生的
      // 2. 事件被挂载在当前元素上
    },
    click2(val, event) {
      console.log(event)
    },
  },
  computed: {
    // computed有缓存，data不变则不会重新计算
    double() {
      return this.num * 2
    },

    double2: {
      set(val) {
        // val打印出来的值就是输入框的值
        console.log(val)
        // this.num = val/2
      },
      get() {
        console.log(this.num * 2)     // 只有第一次加载会获取值 之后每次输入框的值会在set方法里面体现
        return this.num * 2
      }
    }
  },

  watch: {
    name(val, oldVal) {      // 值类型监听 可以正常拿到oldVal和val
      console.log(val)
      console.log(oldVal)

    },
    info: {
      handler(val) {
        console.log(val)    // 引用类型，拿不到oldVal。因为指针相同，此时已经指向同一个内存地址
      },
      deep: true      // 深度监听
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
