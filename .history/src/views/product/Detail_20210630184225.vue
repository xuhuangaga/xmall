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
    getData(){
      axios.get(`/api/goods/detail?productId=${this.id}`)
      .then(res=>{
        console.log(res);
      })
      .catch(error=>{
        this.$message.error(`请求失败.${error}`)
        console.log(error);
      })
    }
  },
  mounted() {
    this.id=this.$route.query.id
    this.getData()
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>