<template>
  <div class="box">
    <div v-for="(item, index) in mainList" :key="index">
      <div class="title p-l15">{{ item.name }}</div>
      <div class="flex-j-between a-center content bg-c-w">
        <div
          v-for="(item1, index1) in item.panelContents"
          :key="index1"
          class="t-a-center content_dv"
        >
          <div class="c-hand">
            <img
              :src="item1.picUrl"
              width="609"
              height="430"
              v-if="index1 === 0"
            />
            <img :src="item1.picUrl" width="206" height="206" v-else />
          </div>
          <div>{{ item1.productName }}</div>
          <div class="f-size12 m-t-b10 subtitle">{{ item1.subTitle }}</div>
          <div class="t-a-center">
            <div class="f-w-bold m-t20 price">￥{{ item1.salePrice }}</div>
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
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    mainList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      arr: []
    };
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.mainList);
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  margin: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  .title {
    background: rgb(245, 245, 245);
    color: rgb(98, 105, 112);
    height: 60px;
    line-height: 60px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .content {
    border-top: 1px solid #ccc;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    // overflow: hidden;
    .content_dv {
      .subtitle {
        color: #ccc;
      }
      .price {
        color: rgb(212, 77, 68);
      }
      .hot_btn {
        display: none;
      }
      .hot_btn div {
        border-radius: 4px;
        width: 70px;
        padding: 5px 12px;
      }
      .detal {
        border: 1px solid #ccc;
        color: rgb(100, 100, 100);
      }
      .car {
        border: 1px solid #5c81e3;
        background-color: #678ee7;
      }
      &:hover {
        animation: content_dv_hover 0.7s forwards;
        .hot_btn {
          display: flex !important;
          display: block;
        }
        .price {
          display: none;
        }
      }
    }
  }
}
// 热卖商品hover向上慢慢移动一定距离
@keyframes content_dv_hover {
  0% {
    box-shadow: 0px 0px 0px #999;
    transform: translateY(0px);
  }
  100% {
    box-shadow: 0px 0px 20px #999;
    transform: translateY(-4px);
  }
}
</style>