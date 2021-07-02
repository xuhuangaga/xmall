<template>
  <div>
    <div class="flex-j-around a-center content bg-c-w">
      <div class="flex-j-between a-center">
        <div class="content_ll">
          <div @click="activeItem(0)" :class="{'activeItem':activeIndex===0}">
            <img src="" alt="">
          </div>
          <div @click="activeItem(1)"></div>
          <div @click="activeItem(2)"></div>
          <div @click="activeItem(3)"></div>
          <div @click="activeItem(4)"></div>
        </div>
        <div class="content_lr">2</div>
      </div>
      <div class="content_r">右边</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeIndex:0
    };
  },
  components: {},
  methods: {
    //点击产品图片小图
    activeItem(index){
      this.activeIndex=index
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.content {
  margin: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  height: 500px;
  .content_ll {
    width: 30%;
    height: 100%;
    img {
      width: 54px;
      height: 54px;
    }
    div {
      border:1px solid #f0f0f0;
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
      border-radius: 8px;
    }
    .activeItem {
      border:3px solid #ccc;
    }
  }
   .content_lr {
    width: 70%;
    border: 1px solid red;
    height: 100%;
  }
}
</style>