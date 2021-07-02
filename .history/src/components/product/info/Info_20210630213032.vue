<template>
  <div>
    <div class="flex-j-around a-center content bg-c-w">
      <div class="flex-j-between a-center content_l">
        <div class="content_ll m-r20">
          <div
            v-for="(item, index) in 5"
            :key="index"
            @click="activeItem(index, '../../../assets/images/ban1.png')"
            :class="{ activeItem: activeIndex === index }"
            class="flex-j-around a-center c-hand"
          >
            <img src="../../../assets/images/ban1.png" />
          </div>
        </div>
        <div class="content_lr">
          <img :src="imgUrl" />
        </div>
      </div>
      <div class="content_r">
        <div class="title f-size20">支付测试商品 IPhone X 全面屏 全面绽放</div>
        <div class="flex-j-between a-center m-t-b20">
          <div class="f-size12 subtitle">此仅为支付测试商品 拍下不会发货</div>
          <div class="price f-w-bold">￥1.00</div>
        </div>
        <div class="num f-size12">
          <div class="num_text">数量</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeIndex: 0,
      imgUrl: "https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png"
    };
  },
  components: {},
  methods: {
    //点击产品图片小图
    activeItem(index, url) {
      this.activeIndex = index;
      // this.imgUrl = url;
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.content {
  padding: 60px;
  margin: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 100%;
  .content_r {
    width: 50%;
  }
  .content_ll {
    width: 30%;
    height: 100%;
    img {
      width: 54px;
      height: 54px;
    }
    div {
      border: 1px solid #f0f0f0;
      width: 54px;
      height: 54px;
      margin-bottom: 10px;
      border-radius: 5px;
      padding: 12px;
    }
    .activeItem {
      border: 3px solid #ccc;
      padding: 10px;
    }
  }
  .content_lr {
    width: 100%;
    height: 100%;
    img {
      width: 440px;
      height: 440px;
    }
  }
  .content_r {
    width: 33%;
    .subtitle {
      color: #ccc;
    }
    .price {
      color: rgb(212, 77, 68);
    }
    .num {
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      height: 80px;
      .num_text {
        color:#999;
        line-height: 80px;
      }
    }
  }
}
</style>