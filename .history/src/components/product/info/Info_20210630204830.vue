<template>
  <div>
    <div class="flex-j-around a-center content bg-c-w">
      <div class="flex-j-between a-center">
        <div class="content_ll">1</div>
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
.content {
  margin: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  height: 500px;
  .content_ll {
    width: 30%;
  }
}
</style>