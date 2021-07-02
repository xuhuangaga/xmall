<template>
  <div class="banner_box">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, index) in list.panelContents" :key="index">
        <div class="small p-relative" @mouseenter="mouseenter">
            <img :src="item.picUrl" class="c-hand"/>
            <img :src="item.picUrl2" />
            <img :src="item.picUrl3" />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
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
    return {};
  },
  components: {},
  methods: {
    //banner鼠标移入事件
    mouseenter(e) {
      //鼠标距离盒子的横向坐标
      let x = e.offsetX;
      //鼠标距离盒子的纵向坐标
      let y = e.offsetY;
    },
    //跳转
    //跳转产品详情页面
    goto(url, id) {
      console.log(id);
      let routeUrl = this.$router.resolve({
        path: url,
        query: {
          id: id
        }
      });
      window.open(routeUrl.href, "_self");
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.banner_box {
  padding: 20px 0px;
}
.el-carousel__item:nth-child(2n) {
  .small {
    .img:nth-child(2) {
      img {
        z-index: 999;
      }
    }
  }
}
.img {
  width: 98%;
  margin-left: 1%;
  img {
    width: 100%;
    position: absolute;
    top: 0px;
    height: 500px;
    border-radius: 10px;
  }
}
</style>