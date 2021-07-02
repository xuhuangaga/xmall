<template>
  <div class="flex-j-around a-center box">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
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
    }
  },
  components: {},
  methods: {
    //获取数据
    getData(){
      
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>