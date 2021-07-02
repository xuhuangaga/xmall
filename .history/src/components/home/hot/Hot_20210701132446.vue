<template>
  <div class="pro_box">
    <div class="title p-l15">热卖产品</div>
    <div class="flex-j-around a-center content bg-c-w">
      <div
        v-for="(item, index) in arr"
        :key="index"
        class="t-a-center content_dv"
        @click="goto('/detail',item.productId)"
      >
        <div class="c-hand">
          <img :src="item.picUrl" width="206" height="206" />
        </div>
        <div>{{ item.productName }}</div>
        <div class="f-size12 m-t-b10 subtitle">{{ item.subTitle }}</div>
        <div class="t-a-center">
          <div class="f-w-bold m-t20 price">￥{{ item.salePrice }}</div>
        </div>
        <div class="hot_btn f-size12 flex-j-center a-center m-t20">
          <div size="small" class="detal c-hand">查看详情</div>
          <div size="small" type="primary" class="car f-c-w c-hand m-l10">
            加入购物车
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      arr: []
    };
  },
  components: {},
  methods: {
    //获取数据
    getData() {
      this.arr = this.list.panelContents;
    },
    //跳转产品详情页面
    goto(url, id) {
      let routeUrl = this.$router.resolve({
        path: url,
        query: {
          id: id
        }
      });
      window.open(routeUrl.href,'_blank')
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
.pro_box {
  // margin: 20px 10px;
  // border-radius: 8px;
  // border: 1px solid #ccc;
  // .title {
  //   background: rgb(245, 245, 245);
  //   color: rgb(98, 105, 112);
  //   height: 60px;
  //   line-height: 60px;
  //   border-top-left-radius: 8px;
  //   border-top-right-radius: 8px;
  // }
  .content {
    border-top: 1px solid #ccc;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    .content_dv {
      width: 50% !important;
      padding-top: 60px;
      height: 380px;
     
    }
  }
}
</style>