<template>
  <div class=" p-t20">
    <!-- 商品图片信息 -->
    <Info v-if="list" :list="list"></Info>
    <!-- 商品详情 -->
    <Detail v-if="list" :list="list"></Detail>
  </div>
</template>

<script>
import Info from "../../components/product/info/Info";
import Detail from "../../components/product/detail/Detail";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: null,
      list: null
    };
  },
  components: {
    Info,
    Detail
  },
  methods: {
    //获取数据
    getData() {
      axios
        .get(`/api/goods/detail?productId=${this.id}`)
        .then(res => {
          if (res.data.code === 200) {
            this.list = res.data.data.result;
            // console.log(this.list);
          }
        })
        .catch(error => {
          this.$message.error(`请求失败.${error}`);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getData();
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>