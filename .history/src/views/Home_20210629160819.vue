<template>
  <div>
    <Banner v-if="list[0]" :list="list[0]"></Banner>
    <Activity v-if="list[1]" :list="list[1]"></Activity>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "../components/home/banner/Banner";
import Activity from '../components/home/activity/Activity';
export default {
  name: "",
  props: {},
  data() {
    return {
      list: []
    };
  },
  components: {
    Banner,
    Activity
  },
  methods: {
    //获取数据
    getData() {
      axios
        .get("/api/goods/home")
        .then(res => {
          this.list = res.data.data;
          console.log(this.list);
        })
        .catch(error => {
          this.$message.error(`请求失败.${error}`);
        });
    }
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>