<template>
  <div>
    <div class="cover">
      <img src="../../../assets/images/login.png" alt="photo" />
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
.cover {
  width: 180px;
  height: 180px;
  position: relative;
}
.cover:hover {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 50px 30px #ffffff inset;
}
img {
  width: 180px;
  height: 180px;
  display: block;
  margin-bottom: 20px;
}
</style>