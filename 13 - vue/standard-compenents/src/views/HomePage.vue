<template>
  <div class="">
    <img src="~@/assets/top.png" alt="">
    <div class="block">
      <el-carousel height="418px">
        <el-carousel-item>
          <img src="~@/assets/banner1.png" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="~@/assets/banner2.png" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="~@/assets/banner3.png" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <img src="~@/assets/2.png" alt="">
    <img src="~@/assets/3.png" alt="">
    <img src="~@/assets/4.png" alt="">
    <img src="~@/assets/5.png" alt="">
    <img src="~@/assets/6.png" alt="">
    <img src="~@/assets/7.png" alt="">
    <img src="~@/assets/8.png" alt="">
    <img src="~@/assets/bottom.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [{
        id: 1,
        name: '1',
        url: '~@/assets/3.png'
      }]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.block{
  margin-top: -3px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
