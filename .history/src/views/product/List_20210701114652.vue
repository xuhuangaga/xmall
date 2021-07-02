<template>
  <div>
    <div class="flex a-center p-tb20">
      <div class="f-size12 flex a-center sort">
        <div
          class="m-lr10 c-hand"
          @click="activeItem(index)"
          :class="{ blue: activeIndex === index }"
          v-for="(item, index) in sort"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
      <div>
       <div>
         <input v-model="priceMin" class="sort_ipt" placeholder="价格">
       </div>
       <div></div>
       <div></div>
       <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeIndex: 0,
      sort: [
        {
          name: "价格排序"
        },
        {
          name: "价格从低到高"
        },
        {
          name: "价格从高到底"
        }
      ],
      priceMin:0,
      priceMax:0
    };
  },
  components: {},
  methods: {
    //点击排序条件
    activeItem(index) {
      this.activeIndex = index;
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.sort {
  .c-hand {
     padding: 3px;
  }
}
</style>