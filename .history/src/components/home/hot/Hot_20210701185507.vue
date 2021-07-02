<template>
  <div class="pro_box">
    <div class="title p-l15">热卖产品</div>
    <div class="flex-j-around a-center content bg-c-w">
      <div
        v-for="(item, index) in arr"
        :key="index"
        class="t-a-center content_dv"
        @click="goto('/detail', item.productId)"
      >
        <div class="c-hand">
          <img :src="item.picUrl" width="206" height="206" />
        </div>
        <div>{{ item.productName }}</div>
        <div class="f-size12 m-t-b10 subtitle">{{ item.subTitle }}</div>
        <div class="t-a-center">
          <div class="f-w-bold m-t20 price">
            ￥{{ Math.round((item.salePrice * 100) / 100).toFixed(2) }}
          </div>
        </div>
        <div class="hot_btn f-size12 flex-j-center a-center m-t20">
          <div size="small" class="detal c-hand">查看详情</div>
          <div class="p-relative">
            <div class="small_img bg-c-w flex-j-center a-center" ref="sss">
              <img :src="item.picUrl" width="30" height="30" />
            </div>
            <div
              size="small"
              type="primary"
              class="car f-c-w c-hand m-l10"
              @click.stop="addCar(item.productId)"
            >
              加入购物车
            </div>
          </div>
        </div>
      </div>
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
      window.open(routeUrl.href, "_blank");
    },
    //加入购物车
    addCar(id) {
      this.$emit("addCar", id);
      this.$refs.sss[0].classList.add("small_img_ani");
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
.content_dv {
  width: 50% !important;
  padding-top: 80px !important;
  height: 380px !important;
  .small_img {
    border-radius: 100% !important;
    width: 30px !important;
    height: 40px !important;
    border: 1px solid #eee;
    position: absolute;
    top: -50px;
  }
  .small_img_ani {
    animation: smallImg 2s forwards;
  }
}
@keyframes smallImg {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(200px,-200px);
  }
  50% {
    transform: translate(400px,-400px);
  }
  100% {
    transform: translate(800px, -800px);
  }
}
</style>