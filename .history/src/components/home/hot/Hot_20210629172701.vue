<template>
  <div class="box">
    <div class="title p-l15">热卖产品</div>
    <div class="flex-j-around a-center content bg-c-w">
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div class="flex a-center">
          <div></div>
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
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  padding:0px 20px;
  .title {
    background: rgb(239, 239, 239);
    border-radius: 8px;
    color: rgb(98, 105, 112);
    border: 1px solid red;
  }
}
</style>