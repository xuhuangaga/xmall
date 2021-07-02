<template>
  <div class="flex a-center f-size14 box">
    <template v-for="(item, index) in list">
      <div class="yd"></div>
      <div class="c-hand" @click="activeItem(item.id)" :class="{'active':activeIndex===item.id}">{{ item.name }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeIndex: 1,
      list: [
        {
          id: 1,
          name: "全部"
        },
        {
          id: 2,
          name: "捐赠名单"
        },
        {
          id: 3,
          name: "后台管理系统"
        },
        {
          id: 4,
          name: "XMall小程序"
        },
        {
          id: 5,
          name: "XPay支付系统"
        },
        {
          id: 6,
          name: "XBoot开发平台"
        },
        {
          id: 7,
          name: "宣传视频"
        },
        {
          id: 8,
          name: "Github"
        },
        {
          id: 9,
          name: "商用授权"
        }
      ]
    };
  },
  components: {},
  methods: {
    //点击选项卡
    activeItem(id) {
      this.activeIndex = id;
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
  }
  .active {
    font-weight: bold;
  }
}
</style>