<template>
  <div class="flex-j-around a-center box">
    <div v-for="(item, index) in arr" :key="index" class="act_dv">
      <!-- <img :src="item.picUrl" /> -->
      <div style="background:url('+item.picUrl+')"></div>
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
.box {
  // .covet {
  //   position: relative;
  // }
  // .covet {
  //   position: relative;
  // }
  margin: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  .act_dv {
    cursor: pointer;
    width: 25%;
    height: 200px;
    border-right: 1px solid #eee;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0 0 50px 10px #eee inset;
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