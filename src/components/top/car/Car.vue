<template>
  <div class="top_car_dv">
    <div>
      <i class="iconfont icon-jt_top"></i>
    </div>
    <div class="top_car_list_dv">
      <div v-if="!list" style="margin-top:40%">
        <div class="flex-j-center a-center">
          <i class="iconfont icon-gouwuche1"></i>
        </div>
        <div class="flex-j-center a-center">您的购物车竟然是空的!</div>
      </div>
      <div
        class="top_car_list c-hand"
        v-for="(item, index) in list"
        :key="index"
        v-else
      >
        <div class="flex-j-between a-center">
          <div class="flex f-size14 a-center">
            <div class="img p-10 m-20" @click="goto('/detail', item.productId)">
              <img :src="item.productImageBig" />
            </div>
            <div>
              <div
                class="blue p-r10 c-hand sl-one pro_name"
                @click="goto('/detail', item.productId)"
              >
                {{ item.productName }}
              </div>
              <div class="flex m-t10 f-w-bold f-size12">
                <div class="price">￥ {{ item.salePrice }}</div>
                <div class=" m-l10 car_num">x {{ item.count }}</div>
              </div>
            </div>
          </div>
          <div class="p-r10 car_del">
            <i
              class="iconfont icon-chacha f-size20"
              @click="del(item.productId)"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-j-between a-center compute_dv" v-if="list">
      <div>
        <div class="f-size12">共 {{ list.length }} 件商品</div>
        <div class="flex a-center m-t10">
          <div>合计：</div>
          <div class="price f-size12 f-w-bold">￥</div>
          <div class="price f-size20 f-w-bold">
            {{ Math.round((totalMoney * 100) / 100).toFixed(2) }}
          </div>
        </div>
      </div>
      <div class="goCar f-c-w f-size14 c-hand">
        去购物车
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      totalMoney: 0,
      list: []
    };
  },
  components: {},
  methods: {
    //跳转
    goto(url, id) {
      //小图跳转详情
      let routeUrl = this.$router.resolve({
        path: url,
        query: {
          id: id
        }
      });
      window.open(routeUrl.href, "_blank");
    },
    //删除购物车
    del(id) {
      axios
        .post("/api/goods/delCart", {
          productId: id
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          this.$message.error(`请求失败.${error}`);
        });
    },
    //获取数据
    getData() {
      let ls_carList = localStorage.getItem("carList");
      this.list = ls_carList ? JSON.parse(ls_carList) : null;
      if (this.list) {
        this.list.map(item => {
          this.totalMoney += item.salePrice * item.count;
        });
      }
    }
  },
  mounted() {
    // console.log(this.list);
    this.getData();
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.top_car_dv {
  width: 360px;
  height: 450px;
  background: #fff;
  z-index: 999;
  border-radius: 8px;
  border: 1px solid #eee;
  position: absolute;
  right: 0;
  top: 64px;
  .top_car_list_dv {
    .icon-gouwuche1 {
      font-size: 100px;
      color: #999;
    }
    border-top-left-radius: 8px;
    border-top-left-radius: 8px;
    .top_car_list {
      border-bottom: 1px solid #eee;
      .img {
        width: 60px;
        height: 60px;
        border: 1px solid #eee;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .blue {
        border: none !important;
      }
      .pro_name {
        width: 165px;
      }
      .car_num {
        color: #ccc;
      }
      .car_del {
        display: none;
      }
      .icon-chacha {
        color: #ccc;
        &:hover {
          color: #999 !important;
        }
      }
      &:hover {
        background: rgb(252, 252, 252);
        .car_del {
          display: block;
        }
      }
    }
    height: 80%;
    //超出显示滚动条
    overflow-y: auto;
  }
  .compute_dv {
    background: rgb(248, 248, 248);
    height: 20%;
    padding: 0px 20px;
    border-bottom-left-radius: 8px;
    border-bottom-left-radius: 8px;
    .goCar {
      background-color: #678ee7;
      padding: 10px 30px;
      border-radius: 8px;
    }
  }
  .icon-jt_top {
    position: absolute;
    top: -12px;
    right: 43px;
    color: #fff;
  }
}
</style>