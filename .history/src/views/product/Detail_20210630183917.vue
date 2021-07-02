<template>
  <div>
    <!-- 商品图片信息 -->
    <Info></Info>
    <!-- 商品详情 -->
    <Detail></Detail>
  </div>
</template>

<script>
import Info from '../../components/product/info/Info';
import Detail from '../../components/product/detail/Detail';
import axios from 'axios';
export default {
  name: '',
  props:{},
  data () {
    return {
      id:null
    }
  },
  components: {
    Info,
    Detail
  },
  methods: {
    //获取数据
    getData(){}
  },
  mounted() {
    this.id=this.$route.query.id
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>