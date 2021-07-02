<template>
  <div>
    <div class="flex a-center p-tb20">
      <div class="f-size12 flex a-center">
        <div class="m-lr10 c-hand" v-for="(item,index) in sort" :key="index">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      activeIndex:0,
      sort:[
        {
          name:'价格排序'
        },
        {
          name:'价格从低到高'
        },
        {
          name:'价格从高到底'
        }
      ]
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