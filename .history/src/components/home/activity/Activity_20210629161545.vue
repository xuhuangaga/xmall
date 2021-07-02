<template>
  <div class="flex-j-around a-center box">
    <div v-for="(item,index) in arr" :key="index">
      <img :src="item.picUrl">
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
.box {
  margin:20px;
  border:1px solid #ccc;
  border-radius: 10px;
  div {
    width: 25%;
  img {
    width: 100%;
    height: 200px;
  }
  }
}
</style> 