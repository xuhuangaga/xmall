<template>
  <div>
    <div class="top"><Top></Top></div>
    <div class="nav">
      <Nav></Nav>
    </div>
    <div>
      <router-view class="main"></router-view>
    </div>
    <div class="footer"><Footer></Footer></div>
  </div>
</template>

<script>
import Top from "../../components/top/Top";
import Footer from "../../components/footer/Footer";
import Nav from '../../components/nav/Nav';
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Top,
    Footer,
    Nav
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.top {
  background: black;
  height: 100% !important;
}
.nav {
  background: rgb(247,247,247);
  padding: 40px 20px;
}
// .el-main {
//   background: rgb(237,237,237);
//   padding: 0 !important;
//   margin:  0 20px;
// }
// .footer {
//   background: rgb(250,250,250);
//   height: 100% !important;
// }
</style>