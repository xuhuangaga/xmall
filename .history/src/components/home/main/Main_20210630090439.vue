<template>
 <div class="box">
    <div class="title p-l15">热卖产品</div>
    <div class="flex-j-around a-center content bg-c-w">
      <div
        v-for="(item, index) in arr"
        :key="index"
        class="t-a-center content_dv"
      >
        <div class="c-hand">
          <img :src="item.picUrl" width="206" height="206" />
        </div>
        <div>{{ item.productName }}</div>
        <div class="f-size12 m-t-b10 subtitle">{{ item.subTitle }}</div>
        <div class="t-a-center">
          <div class="f-w-bold m-t20 price">￥{{ item.salePrice }}</div>
        </div>
        <div class="hot_btn f-size12 flex-j-center a-center m-t20">
          <div size="small" class="detal c-hand">查看详情</div>
          <div size="small" type="primary" class="car f-c-w c-hand m-l10">
            加入购物车
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    mainList:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>