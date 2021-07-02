<template>
  <div>
    <List @addCar="addCar"></List>
  </div>
</template>

<script>
import List from '../../components/product/list/List';
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {
    List
  },
  methods: {
    //加入购物车
    addCar(id){
      
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>