<template>
  <div>
    <div class="title p-l15">热卖产品</div>
    <div class="flex-j-around a-center">
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div class="flex a-center">
          <div></div>
          <div></div>
          <div></div>
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
    list:{
      type:Object,
      required:true
    }
  },
  data () {
    return {
      arr:[]
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
.title {
  background: #ccc;
  border-radius: 8px;
  color:#999
}
</style>