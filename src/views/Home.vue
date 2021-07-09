<template>
  <div>
    <!-- 轮播图 -->
    <Banner v-if="list[0]" :list="list[0]"></Banner>
    <!-- 活动产品 -->
    <Activity v-if="list[1]" :list="list[1]"></Activity>
    <!-- 热卖产品 -->
    <Hot v-if="list[2]" :list="list[2]" @addCar="addCar"></Hot>
    <!-- 主体部分 -->
    <Main v-if="list[3]" :list="list[3]" @addCar="addCar"></Main>
    <Main v-if="list[4]" :list="list[4]" @addCar="addCar"></Main>
    <Main v-if="list[5]" :list="list[5]" @addCar="addCar"></Main>
    <!-- 活动产品 -->
    <Activity v-if="list[6]" :list="list[6]"></Activity>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "../components/home/banner/Banner";
import Activity from "../components/home/activity/Activity";
import Hot from "../components/home/hot/Hot";
import Main from "../components/home/main/Main";
export default {
  name: "",
  props: {},
  data() {
    return {
      //所有数据
      list: [],
    };
  },
  components: {
    //轮播图
    Banner,
    //活动板块
    Activity,
    //热卖产品
    Hot,
    //主体部分
    Main,
  },
  methods: {
    //获取数据
    getData() {
      axios
        .get("/api/goods/home")
        .then(res => {
          this.list = res.data.data;
          // console.log(this.list);
        })
        .catch(error => {
          this.$message.error(`请求失败.${error}`);
        });
    },
    //加入购物车
    addCar(id) {
      axios
        .post("/api/goods/addCart", {
          productId: id
        })
        .then(res => {
          if(res.data.code === 200)
          {
            console.log('加入购物车成功');
          }
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