<template>
  <div class="flex-j-around a-center box">
    <div v-for="(item, index) in arr" :key="index" class="act_dv">
      <!-- <div class="covet"></div> -->
      <!-- <img :src="item.picUrl" /> -->
      <div :style="{ 'background-image': 'url(' + item.picUrl + ');'}"></div>
           <!-- <div style="background:url('https://resource.smartisan.com/resource/6/610400xinpinpeijian.jpg');"></div> -->
    </div>
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
    //获取数据
    getData() {
      this.arr = this.list.panelContents;
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
// 工具盒子
// .covet {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// }
// .covet:hover {
//   box-shadow: 0 0 30px #eee inset;
// }
.box {
  margin: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  .act_dv {
    position: relative;
    cursor: pointer;
    width: 25%;
    height: 200px;
    border-right: 1px solid #eee;
    div {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
      margin-bottom: 20px;
    }
    &:nth-child(1) {
      img {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }
    &:nth-child(4) {
      border-right: none;
      img {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
}
</style> 