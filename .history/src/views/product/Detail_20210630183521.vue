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
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {
    Info,
    Detail
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>