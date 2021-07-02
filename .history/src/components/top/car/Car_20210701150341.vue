<template>
  <div class="top_car_dv">
    <div>
      <i class="iconfont icon-jt_top"></i>
    </div>
    <div>
      <div class="flex f-size14 a-center">
        <div class="img p-10 m-10"><img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png"></div>
        <div>
          <div class="blue">捐赠商品</div>
          <div class="flex m-t10 f-w-bold">
            <div class="price">￥ 1</div>
            <div class=" m-l10 car_num">x 1</div>
          </div>
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
    border:none !important;
  }
  .car_num {
    color: #ccc;
  }
  .icon-jt_top {
    position: absolute;
    top: -12px;
    right: 43px;
    color: #fff;
  }
} 
</style>