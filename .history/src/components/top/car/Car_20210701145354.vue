<template>
  <div class="top_car_dv">
    <div>
      <i class="iconfont icon-jt_top"></i>
    </div>
    <div>
      <div class="flex">
        <div class="img"><img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png"></div>
        <div>
          <div class="blue">捐赠商品</div>
          <div class="flex">
            <div class="price">￥ 1</div>
            <div>X 1</div>
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
  .icon-jt_top {
    position: absolute;
    top: -12px;
    right: 43px;
    color: #fff;
  }
}
</style>