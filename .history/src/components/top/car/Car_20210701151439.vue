<template>
  <div class="top_car_dv">
    <div>
      <i class="iconfont icon-jt_top"></i>
    </div>
    <div class="top_car_list">
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
    <div class="top_car_list">
      <div class="flex f-size14 a-center">
        <div class="img p-10 m-20">
          <img src="https://ooo.0o0.ooo/2018/07/13/5b48aca99c8b6.png" />
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
    <div class="top_car_list">
      <div class="flex f-size14 a-center">
        <div class="img p-10 m-20">
          <img src="https://ooo.0o0.ooo/2020/07/24/6BV9uTwaqModbYL.png" />
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
    <div class="flex a-center compute_dv">
      <div>
        <div>共4件商品</div>
        <div class="flex a-center">
            <div>合计：</div>
            <div class="price">￥</div>
            <div class="price">52</div>
        </div>
      </div>
      <div class="goCar f-c-w">
        去购物车
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
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
  .compute_dv {
    background: rgb(248,248,248);
    height: 50px;
  }
  .icon-jt_top {
    position: absolute;
    top: -12px;
    right: 43px;
    color: #fff;
  }
}
</style>