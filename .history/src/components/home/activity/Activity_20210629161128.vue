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
      arr:[]
    }
  },
  components: {},
  methods: {
    //获取数据
    getData(){
      this.arr=this.list.panelContents
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