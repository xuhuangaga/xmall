<template>
  <div>
    <div class="top"><Top></Top></div>
    <div class="nav">
      <Nav></Nav>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer"><Footer></Footer></div>
  </div>
</template>

<script>
import Top from "../../components/top/Top";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
export default {
  name: "",
  props: {},
  data() {
    return {
      topCartDvX: 0,
      topCartDvX: 0
    };
  },
  components: {
    Top,
    Footer,
    Nav
  },
  methods: {
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.top {
  background: black;
  height: 100% !important;
  padding: 0px 10px;
}
.nav {
  background: rgb(247, 247, 247);
  padding: 40px 20px;
}
.main {
  background: rgb(237, 237, 237);
  padding: 0 10px 50px 10px !important;
}
.footer {
  background: rgb(250, 250, 250);
  height: 100% !important;
  padding: 0px 10px;
}
</style>