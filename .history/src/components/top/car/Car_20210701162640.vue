<template>
  <div class="top_car_dv">
    <div>
      <i class="iconfont icon-jt_top"></i>
    </div>
    <div class="top_car_list_dv">
      <div class="top_car_list" v-for="(item,index) in carList" :key="index">
        <div class="flex f-size14 a-center">
          <div class="img p-10 m-20">
            <img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png" />
          </div>
          <div>
            <div class="blue">捐赠商品</div>
            <div class="flex m-t10 f-w-bold f-size12">
              <div class="price">￥ 1</div>
              <div class=" m-l10 car_num">x 1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-j-between a-center compute_dv">
      <div>
        <div class="f-size12">共 4 件商品</div>
        <div class="flex a-center m-t10">
          <div>合计：</div>
          <div class="price f-size12 f-w-bold">￥</div>
          <div class="price f-size20 f-w-bold">52</div>
        </div>
      </div>
      <div class="goCar f-c-w f-size14 c-hand">
        去购物车
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    carList:{
      type:Array,
      required:true
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.carList);
    
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
      .car_num {
        color: #ccc;
      }
    }
    height: 80%;
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