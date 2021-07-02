<template>
  <div>
    <div class="flex-j-around a-center content bg-c-w">
      <div class="flex-j-between content_l">
        <div class="content_ll m-r20">
          <div
            v-for="(item, index) in list.productImageSmall"
            :key="index"
            @click="activeItem(index, item)"
            :class="{ activeItem: activeIndex === index }"
            class="flex-j-around a-center c-hand"
          >
            <img :src="item" />
          </div>
        </div>
        <div class="content_lr">
          <img :src="imgUrl" />
        </div>
      </div>
      <div class="content_r">
        <div class="title f-size20">{{ list.productName }}</div>
        <div class="flex-j-between a-center m-t-b20">
          <div class="f-size12 subtitle">{{ list.subTitle }}</div>
          <div class="price f-w-bold">
            ￥{{ Math.round((list.salePrice * 100) / 100).toFixed(2) }}
          </div>
        </div>
        <div class="num f-size14 flex a-center">
          <div class="num_text">数量</div>
          <div
            class="opera_dv flex-j-center a-center  f-size16 m-l10 c-hand"
            @click="reduce"
            :class="{ disabled: disabledReduce }"
          >
            -
          </div>
          <div>
            <input type="text" class="num_ipt" v-model="num" @blur="blur" ref="iptNum"/>
          </div>
          <div
            class="opera_dv flex-j-center a-center f-size16  c-hand"
            @click="add"
            :class="{ disabled: disabledAdd }"
          >
            +
          </div>
        </div>
        <div class="error_tip_dv">
          <div
            class="error_tip price f-size14"
            v-show="tipShow"
            ref="error_tip"
          ></div>
        </div>
        <div class="flex-a-center btn_dv f-size12 m-t20">
          <div
            class="addCar f-c-w t-a-center c-hand"
            :class="{ buy_btn: tipShow }"
          >
            加入购物车
          </div>
          <div
            class="buy t-a-center c-hand m-l10"
            :class="{ buy_btn: tipShow }"
          >
            立即购买
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
      activeIndex: 0,
      num: 1,
      disabledReduce: true,
      disabledAdd: false,
      imgUrl: "",
      tipShow: false
    };
  },
  components: {},
  methods: {
    //输入框失去焦点的事件
    blur() {
      if (this.num === "") {
        this.num = 1;
      }
    },
    //点击产品图片小图
    activeItem(index, url) {
      this.activeIndex = index;
      this.imgUrl = url;
    },
    //减法
    reduce() {
      //最小为1
      if (this.num > 1) this.num--;
      console.log( this.$refs.iptNumber);
      this.$refs.iptNumber.classList.toggle('switchNum')
    },
    //加法
    add() {
      //最大为后端返回的数据（库存）
      if (this.num < this.list.limitNum) this.num++;
      this.$refs.iptNumber.classList.toggle('switchNum')
    }
  },
  mounted() {
    this.imgUrl = this.list.productImageBig;
  },
  computed: {},
  watch: {
    num(val1, val2) {
      //去空格
      if (String(val1).includes(" ")) {
        this.num = String(val1).trim();
        return;
      }
      //验证输入的数量 只能是正整数
      if (val1 !== "") {
        if (!/^\d+$/.test(val1)) {
          this.num = "";
          return;
        }
      }
      //输入值不能超过后端返回的最大值
      if (Number(val1) > this.list.limitNum) {
        this.tipShow = true;
        this.$refs.error_tip.innerText = `购买数量不能超过${this.list.limitNum}`;
      } else {
        this.tipShow = false;
      }
      //如果输入值是1  则禁用-
      if (Number(val1) === 1) {
        this.disabledReduce = true;
      } else {
        this.disabledReduce = false;
      }
      //如果输入值是后端返回的最大值 则禁用+
      if (val1 === this.list.limitNum) {
        this.disabledAdd = true;
      } else {
        this.disabledAdd = false;
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
    .error_tip_dv {
      height: 20px;
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
        background: rgb(252, 252, 252);
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
      .buy_btn {
        background: #ccc;
        cursor: not-allowed;
        color: #fff !important;
        &:hover {
          background:#ccc !important;
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
.switchNum {
  animation: switchNum 0.1s forwards;
}
@keyframes switchNum {
  0%{transform: 0px 0px;}
  100%{transform: 0px -5px;}
}
</style>