<template>
  <div>
    <p>复选框</p>
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
    <label for="jack">jack</label>
    <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
    <label for="mike">mike</label>
    <input type="checkbox" id="jan" value="jan" v-model="checkedNames">
    <label for="jan">jan</label>

    <p>单选框</p>
    <input type="radio" id="male" value="male" v-model="gender">
    <label for="male">男</label>
    <input type="radio" id="female" value="female" v-model="gender">
    <label for="female">女</label>

    <p>下拉选择单选{{selected}}</p>
    <select v-model="selected">
      <option value="">请选择</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>

    <p>下拉选择多选{{selectedArr}}</p>
    <select v-model="selectedArr" multiple>
      <option value="">请选择</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {
      checkedNames: ['jack', 'jan'],      // checkbox Array
      gender: 'female',                   // radio string
      selected: 'A',                      // select单选 string
      selectedArr: ['B']                  // select多选(按住command键) Array 
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
