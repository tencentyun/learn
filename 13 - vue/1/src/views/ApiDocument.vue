<template>
  <div class="ApiDocument">
    <el-col :span="8" class="menu-list">
      <el-menu default-active="2" :unique-opened="true" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu :index="index + ''" v-for="(item, index) in apiArr.slice(0, 9)" :key="item.apiName">
          <template slot="title">
            <span style="font:700 16px white">{{item.id}} - {{item.apiName}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="itemVal in item.info" :key="itemVal.url">
              <span class="url-name" @click="urlClick(itemVal.url)">{{itemVal.name}}</span>
              <el-button class="add-button" size="small" type="primary" @click="addDataForMysql(item, itemVal)">添加</el-button>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>

    <el-col :span="16" class="content-iframe">
      <iframe :src="urlIframe" frameborder="0" width="100%" height="800px"> </iframe>
    </el-col>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ApiDocument",
  components: {},
  data() {
    return {
      apiArr: require("../utils/Api/succFile.json"),
      urlIframe: "",
    };
  },
  mounted() {
    console.log(this.apiArr);
  },
  methods: {
    urlClick(val) {
      this.urlIframe = val;
    },

    addDataForMysql(item, itemVal){
      const param = {
        api: item.apiName,
        name: itemVal.name,
        url: itemVal.url
      }
      axios.post('http://127.0.0.1:3000/addData', param).then(() => {
        console.log('成功');
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.menu-list {
  text-align: left;
  .url-name {
    color: blue;
    cursor: pointer;
  }
  .add-button{
    float: right;
    margin-top: 8px;
  }
}
</style>
