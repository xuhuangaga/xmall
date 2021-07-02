<template>
  <div class="flex a-center f-size14 box">
    <template v-for="(item, index) in list">
      <div class="yd"></div>
      <div class="c-hand" @click="activeItem(index,path)" :class="{'active':activeIndex===index}">{{ item.name }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      //记录选中的导航下标
      activeIndex:0,
      list: [
        {
          name: "首页",
          path:'/'
        },
        {
          name: "全部"
        },
        {
          name: "捐赠名单"
        },
        {
          name: "后台管理系统"
        },
        {
          name: "XMall小程序"
        },
        {
          name: "XPay支付系统"
        },
        {
          name: "XBoot开发平台"
        },
        {
          name: "宣传视频"
        },
        {
          name: "Github"
        },
        {
          name: "商用授权"
        }
      ]
    };
  },
  components: {},
  methods: {
    //点击选项卡
    activeItem(id,path) {
      this.activeIndex = id;
      this.$router.push(path)
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  color: rgb(102, 102, 102);
  .yd {
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background: rgb(102, 102, 102);
  }
  .c-hand {
    padding: 0px 10px;
    &:hover {
      color: #5079d9;
    }
     &:nth-child(2) {
      padding-right: 20px !important;
    }
  }
  .active {
    font-weight: bold;
  }
}
</style>