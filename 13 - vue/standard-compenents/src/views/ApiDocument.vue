<template>
  <div class="ApiDocument">
    <!-- <el-col :span="8" class="menu-list">
      <el-menu default-active="2" :unique-opened="true" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu :index="index + ''" v-for="(item, index) in apiArr.slice(970, 1096)" :key="item.apiName">
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
    </el-col> -->

    <el-col :span="8" class="menu-list">
      <el-menu default-active="2" :unique-opened="true" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item :index="index + ''" v-for="(item, index) in apiList.RECORDS" :key="item.api">
          <span class="url-name" @click="urlClick(item.url)" :class="{'disabled-text': item.url == ''}">
            <strong style="color: yellow; font-size: 16px;">{{index}}</strong>
            <span> - </span>
            <span style="font-size: 16px">{{item.api}}</span>
            <span style="font-size: 10px; color: pink;">&nbsp;&nbsp;&nbsp;&nbsp;({{item.name}})</span>
          </span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="16" class="content-iframe">
      <iframe :src="urlIframe" frameborder="0" width="100%" height="800px"> </iframe>
    </el-col>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ApiDocument",
  components: {},
  data() {
    return {
      apiArr: require("../utils/Api/succFile.json"),
      apiList: require("../utils/Api/api_list.json"),
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

    addDataForMysql(item, itemVal) {
      const param = {
        api: item.apiName,
        name: itemVal.name,
        url: itemVal.url,
      };
      axios
        .post("http://127.0.0.1:3000/addData", param, {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        })
        .then(() => {
          console.log("成功");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-list {
  text-align: left;
  height: 800px;
  overflow-y: scroll;
  .url-name {
    color: blue;
    cursor: pointer;
  }
  .disabled-text{
    color: rgb(245, 212, 232);
  }
  .add-button {
    float: right;
    margin-top: 8px;
  }
}
</style>
