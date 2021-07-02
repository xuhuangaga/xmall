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
        <div class="num f-size14 flex a-center">
          <div class="num_text">数量</div>
          <div
            class="opera_dv flex-j-center a-center  f-size16 m-l10 c-hand"
            @click="reduce"
            :class="{'disabled':disabled}"
          >
            -
          </div>
          <div>
            <el-input
              maxlength="2"
              class="num_ipt"
              v-model.trim.number="num"
              min="1"
            />
          </div>
          <div
            class="opera_dv flex-j-center a-center f-size16  c-hand"
            @click="add"
          >
            +
          </div>
        </div>
        <div class="flex-a-center btn_dv f-size12 m-t20">
          <div class="addCar f-c-w t-a-center c-hand">加入购物车</div>
          <div class="buy t-a-center c-hand m-l10">立即购买</div>
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
      imgUrl: "https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png",
      num: 1,
      disabled: true
    };
  },
  components: {},
  methods: {
    //点击产品图片小图
    activeItem(index, url) {
      this.activeIndex = index;
      // this.imgUrl = url;
    },
    //减法
    reduce() {
      if (this.num > 1) this.num--;
    },
    //加法
    add() {
      this.num++;
    }
  },
  mounted() {},
  computed: {},
  watch: {
    num(val1,val2) {
      // if (/.*[\u4e00-\u9fa5]+.*$/.test(val1))
      // {
      //   this.num=val2
      // }
      if (val1 === 1) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    }
  }
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
      color: rgb(139, 139, 139);
      .num_text {
        line-height: 80px;
      }
      .num_ipt {
        width: 40px;
        border: none;
        text-align: center;
        background: none;
        outline: none;
        color: rgb(139, 139, 139);
      }
      .opera_dv {
        width: 22px;
        height: 22px;
        border-radius: 100%;
        box-shadow: 0px 0px 10px #999;
      }
      .disabled {
        cursor: not-allowed;
        color: #ccc;
        background: rgb(252,252,252);
      }
    }
    .btn_dv {
      div {
        width: 145px;
        height: 50px;
        line-height: 50px;
        border-radius: 4px;
      }
      .addCar {
        background: rgb(89, 129, 226);
        &:hover {
          background: rgb(79, 112, 198);
        }
      }
      .buy {
        border: 1px solid #ccc;
        color: rgb(100, 100, 100);
        &:hover {
          background: rgb(241, 241, 241);
        }
      }
    }
  }
}
</style>