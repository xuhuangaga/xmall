<template>
  <div class="banner_box">
    <el-carousel trigger="click" height="150px" :autoplay="false">
      <el-carousel-item v-for="(item, index) in arr" :key="index">
        <div class="small c-hand p-relative ">
          <div v-for="item1 in item" :key="item1" class="img">
            <img :src="item1" class="ban_img" />
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
    //跳转
    goto(url) {
      this.$router.push(url);
    },
    //获取数据
    getData() {
      console.log(this.list);
      let temp = this.list.panelContents;
      this.list.panelContents.map(item => {
        let obj = [];
        if (item.picUrl) {
          obj.push(item.picUrl);
        }
        if (item.picUrl2) {
          obj.push(item.picUrl2);
        }
        if (item.picUrl3) {
          obj.push(item.picUrl3);
        }
        if (obj) {
          this.arr.push(obj);
        }
      });
      console.log(this.arr);
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
// .banner_box {
//   padding: 0 20px;
// }
// .el-carousel__item {
//   div {
//     // font-size: 14px;
//     // margin: 0;
//     // height: 100%;
//     width: 100%;
//   }
//   .small {
//     position: absolute;
//     .ban_img {
//       position: absolute;
//       top: 0px;
//       height: 500px;
//       width: 100%;
//       border-radius: 10px;
//     }
//   }
// }
// .el-carousel__item:nth-child(2n) {
//   .small {
//     .ban_img:nth-child(2n) {
//       z-index: 999;
//     }
//   }
// }
.el-carousel__item:nth-child(2n) {
  .small {
    .ban_img:nth-child(2n) {
      z-index: 999;
    }
  }
.img {
  width: 98%;
  margin-left: 1%;
  img {
    width: 100%;
  }
}
</style>