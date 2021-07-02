<template>
  <div class="box">
    <div class="title p-l15">热卖产品</div>
    <div class="flex-j-around a-center content bg-c-w">
      <div
        v-for="(item, index) in arr"
        :key="index"
        class="t-a-center content_dv"
      >
        <div class="c-hand">
          <img :src="item.picUrl" width="206" height="206" />
        </div>
        <div>{{ item.productName }}</div>
        <div class="f-size12 m-t-b10 subtitle">{{ item.subTitle }}</div>
        <div class="a-center t-a-center">
          <div class="f-w-bold m-t20 price">￥{{ item.salePrice }}</div>
          <div class="hot_btn f-size12 flex-j-center a-center">
            <div size="small" class="detal c-hand">查看详情</div>
            <div size="small" type="primary" class="car f-c-w c-hand m-l10">
              加入购物车
            </div>
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
    .content_dv {
      border:1px solid red;
      width: 50%;
      padding: 40px 0px;
      .subtitle {
        color: #ccc;
      }
      .price {
        color: rgb(212, 77, 68);
         display: none;
      }
      .hot_btn {
          // display: none;
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
        border:1px solid green;
        .hot_btn {
          display: none;
          // display: inline-block;
          // visibility: initial;
          // div {
          //   display: flex;
          // }
        }
        .price {
          display: block;
      }
      }
    }
  }
}
</style>