<template>
  <div>
    <!-- 轮播图 -->
    <Banner v-if="list[0]" :list="list[0]"></Banner>
    <!-- 活动产品 -->
    <Activity v-if="list[1]" :list="list[1]"></Activity>
    <!-- 热卖产品 -->
    <Hot v-if="list[2]" :list="list[2]"></Hot>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "../components/home/banner/Banner";
import Activity from '../components/home/activity/Activity';
import Hot from '../components/home/hot/Hot';
export default {
  name: "",
  props: {},
  data() {
    return {
      //所有数据
      list: [],
      //装主体部分的数据
      mainList:null
    };
  },
  components: {
    Banner,
    Activity,
    Hot
  },
  methods: {
    //获取数据
    getData() {
      axios
        .get("/api/goods/home")
        .then(res => {
          this.list = res.data.data;
          this.mainList.push(this.list[3],this.list[4],this.list[5])
          console.log(this.mainList);
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