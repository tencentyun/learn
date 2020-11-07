<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>原始值：{{data.count}}</h1>
    <h2>double值：{{data.double}}</h2>
    <div>
      鼠标位置 X: {{x}}, Y: {{y}}
    </div>
    <div>
      <h3 v-if="loadingType">loading 加载中</h3>
      <img v-else :src="result" alt="">
    </div>
    <button @click= "data.increase">点击</button>
    <button @click="modalIsOpen">Modal Open</button>
    <Modal :isOpen="isOpen" @close-moadl="closeModal"></Modal>
    <div>{{err}}</div>

    <Suspense>
      <template #default>
        <DogShow></DogShow>
      </template>
      <template #fallback>
        <h1>Loading......</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">

import { computed, onMounted, onUpdated, reactive, ref, watch, onErrorCaptured } from "vue";
import useMousePosition from './hooks/useMousePosition'
import Modal from './components/Modal.vue'
import DogShow from './components/DogShow.vue'


interface DataProps {
  count: number;
  increase: () => void;
  double: number;
}

import useURLLoader from './hooks/useURLLoader'
interface DogResult{
  message: string;
  status: string;
}
export default {
  name: "App",
  components: {
    Modal,
    DogShow
  },
  setup() {

    const err = ref(null)
    onErrorCaptured((e: any) =>{
      err.value = e
    })

    onMounted(() => { 
      console.log('onMounted');
    });
    
    onUpdated(() => { 
      console.log('onUpdated');
    })

    const {x, y} = useMousePosition()
    const {result, loadingType} = 
    useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')

    // vue3 重中之重 准备 在props data methods 生命周期之前运行的 这里无法访问this
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2),
    });

    watch(() => data.count, function (newVal, oldVal){
      console.log(oldVal);
      console.log(newVal);
    })

    const isOpen = ref(false)
    const modalIsOpen = () => {
      isOpen.value = true
    }
    const closeModal = () => {
      isOpen.value = false
    }

    return {
      data,
      x, 
      y,
      result,
      loadingType,
      isOpen,
      modalIsOpen,
      closeModal,
      err
    };

    // const count = ref(0)  // 响应式对象 此时count是一个object
    // const increase = () => {
    //   count.value++
    // }
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // return {
    //   count,
    //   increase,
    //   double
    // }

   
  },
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
