<template>
  <div class="box p-t20">
    <div class="flex-j-around a-center content bg-c-w">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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
  .content {
    border-top: 1px solid #ccc;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
    height: 500px;
  }
}
</style>