<template>
  <div class="banner_box">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="(item, index) in arr" :key="index">
        <div class="small" @mouseenter="mouseenter">
          <div
            v-for="item1 in item"
            :key="item1"
            class="img c-hand p-relative "
          >
            <img :src="item1" />
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
    return {
      arr: []
    };
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
    goto(url) {
      this.$router.push(url);
    },
    //获取数据
    getData() {
      // console.log(this.list);
      let temp = this.list.panelContents;
      this.list.panelContents.map(item => {
        let obj = [item.picUrl, item.picUrl2, item.picUrl3];
        obj = obj.filter(item1 => {
          return !item1;
        });
        // if (item.picUrl) {
        //   obj.push(item.picUrl);
        // }
        // if (item.picUrl2) {
        //   obj.push(item.picUrl2);
        // }
        // if (item.picUrl3) {
        //   obj.push(item.picUrl3);
        // }
        if (obj) {
          this.arr.push(obj);
        }
      });
      // console.log(this.arr);
    }
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.banner_box {
  padding: 20px 10px;
}
.el-carousel__item:nth-child(2n) {
  .small {
    .img:nth-child(2n) {
      img {
        z-index: 999;
      }
    }
  }
}
.img {
  width: 98%;
  margin-left: 1%;
  // position: absolute;
  img {
    width: 100%;
    position: absolute;
    top: 0px;
    height: 500px;
    border-radius: 10px;
  }
}
</style>