<template>
  <div class="box m-t20">
    <div class="title p-l15">热卖产品</div>
    <div class="flex-j-around a-center content bg-c-w">
      <div v-for="(item,index) in arr" :key="index" class="t-a-center">
        <div><img :src="item.picUrl" width="206" height="206"></div>
        <div>{{item.productName}}</div>
        <div>{{item.subTitle}}</div>
        <div class="flex a-center t-a-center">
          <div>￥{{item.salePrice}}</div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
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
    getData(){
      this.arr=this.list.panelContents
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  padding:0px 20px;
    border-radius: 8px;
  .title {
    background: rgb(239, 239, 239);
    color: rgb(98, 105, 112);
    border: 1px solid red;
  }
}
</style>