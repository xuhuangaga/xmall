<template>
  <div class="footer">
    <div class="flex-j-between a-center f-size12">
      <div class="footer_dv">
        <div class="footer_dv_title">订单服务</div>
        <div class="c-hand">购买指南</div>
        <div class="c-hand">支付方式</div>
        <div class="c-hand">送货政策</div>
      </div>
      <div class="footer_dv">
        <div class="footer_dv_title">服务支持</div>
        <div class="c-hand">官方开源</div>
        <div class="c-hand">项目前端</div>
        <div class="c-hand">项目后端</div>
      </div>
      <div class="footer_dv">
        <div class="footer_dv_title">自助服务</div>
        <div class="c-hand">个人博客</div>
        <div class="c-hand">个人简介</div>
        <div class="c-hand">个人视频</div>
      </div>
      <div class="footer_dv">
        <div class="footer_dv_title">其他项目</div>
        <div class="c-hand">XPay支付系统</div>
        <div class="c-hand">数据共享</div>
        <div class="c-hand">待开发...</div>
      </div>
      <div class="footer_dv">
        <div class="footer_dv_title">友情链接</div>
        <div class="c-hand">宇cccc</div>
        <div class="c-hand">Smartisan</div>
        <div class="c-hand">Vue</div>
      </div>
      <div class="footer_dv">
        <div class="footer_dv_title">关注我吧</div>
        <div class="c-hand">腾讯 QQ</div>
        <div class="c-hand">新浪微博</div>
        <div class="c-hand">官方邮箱</div>
      </div>
      <div class="footer_r">
        <div class="footer_dv_title footer_dv_right p-t20">1012890987</div>
        <div class=" m-t-b10">
          周一至周日 10:00-23:00 （限Starrer或捐赠人联系）
        </div>
        <div
          class="helper f-size14 t-a-center c-hand m-b20"
          @click="notify('离线帮助', '没人会帮助你，请自己靠自己')"
        >
          在线帮助
        </div>
      </div>
    </div>
    <div class="footer_bottom f-size12 p-tb20 m-t-b20">
      <div class="flex a-center m-t20">
        <div>
          Copyright ©2017, exrick.cn Co., Ltd. All Rights
          Reserved.本网站设计内容大部分属锤子科技
        </div>
        <div class="blue p-l-r10 m-l10 br0" >法律声明</div>
        <div class="blue p-l-r10 br0" >隐私条款</div>
        <div class="blue p-l-r10 br0" >开发者中心</div>
      </div>
      <div class="flex a-center m-t20">
        <div>蜀ICP备16030308号-1</div>
        <div class="m-l10">蜀ICP证16030308号</div>
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
  methods: {
    //右边提示
    notify(title, message) {
      this.$notify.info({
        title: title,
        message: message
      });
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.footer {
  color: #969696;
  .footer_dv_title {
    color: #646464;
  }
  .footer_dv div {
    line-height: 30px;
  }
  .helper {
    width: 130px;
    height: 34px;
    line-height: 34px;
    color: #5079d9;
    border: 1px solid #dcdcdc;
    margin-top: 8px;
    border-radius: 5px;
    &:hover {
      background: #eee;
    }
  }
  .footer_r {
    margin-left: 50px;
  }
  .footer_dv_right {
    font-size: 28px;
  }
}
.footer_bottom {
  border-top: 1px solid #eee;
  .blue {
    cursor: pointer;
    color: #5079d9;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
  .br0 {
    border-right: 0px;
  }
}
</style>