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
      axios
        .post("/api/goods/addCart", {
          productId: id
        })
        .then(res => {
          if(res.data.code === 200)
          {
            console.log('加入购物车成功');
          }
        })
        .catch(error => {
          this.$message.error(`请求失败.${error}`);
        });
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>