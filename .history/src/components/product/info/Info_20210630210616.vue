<template>
  <div>
    <div class="flex-j-around a-center content bg-c-w">
      <div class="flex-j-between a-center">
        <div class="content_ll">
          <div
            v-for="(item, index) in 5"
            :key="index"
            @click="activeItem(index, '../../../assets/images/ban1.png')"
            :class="{ activeItem: activeIndex === index }"
            class="flex-j-around a-center c-hand"
          >
            <img src="../../../assets/images/ban1.png" />
          </div>
        </div>
        <div class="content_lr">
          <img :src="imgUrl" />
        </div>
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
      activeIndex: 0,
      imgUrl: "/img/ban1.8fa7866d.png"
    };
  },
  components: {},
  methods: {
    //点击产品图片小图
    activeItem(index, url) {
      this.activeIndex = index;
      // this.imgUrl = url;
      this.imgUrl = '/img/ban1.8fa7866d.png';
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
      border: 1px solid #f0f0f0;
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
      border-radius: 8px;
    }
    .activeItem {
      border: 3px solid #ccc;
    }
  }
  .content_lr {
    img {
      width: 440px;
      height: 440px;
    }
  }
  .content_lr {
    width: 70%;
    border: 1px solid red;
    height: 100%;
  }
}
</style>