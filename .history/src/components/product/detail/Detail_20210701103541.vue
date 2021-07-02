<template>
  <div class="box">
    <div class="title p-l15">产品信息</div>
    <div class="flex-j-around a-center content bg-c-w" v-html="list.detail">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list:{
      type:Object,
      required:true
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  margin: 20px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  .title {
    background: rgb(245, 245, 245);
    color: rgb(98, 105, 112);
    height: 60px;
    line-height: 60px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .content {
    border-top: 1px solid #ccc;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    height: 100%;
  }
}
</style>