<template>
  <div class="flex-j-around a-center box">
    <div v-for="(item, index) in arr" :key="index">
      <img :src="item.picUrl" />
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
  margin: 0px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  div {
    cursor: pointer;
    width: 25%;
    height: 200px;
    border-right: 1px solid #ccc;
    &:hover {
      box-shadow: -20px 0px 30px #ccc;
    }
    img {
      width: 100%;
      height: 100%;
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