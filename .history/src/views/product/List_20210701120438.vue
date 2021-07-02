<template>
  <div>
    <div class="flex a-center p-tb20 sort">
      <div class="f-size12 flex a-center">
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
      <div class="flex a-center">
        <div>
          <input
            v-model="priceMin"
            class="sort_ipt t-a-center"
            placeholder="价格"
          />
        </div>
        <div class="reduce">-</div>
        <div>
          <input
            v-model="priceMax"
            class="sort_ipt t-a-center"
            placeholder="价格"
          />
        </div>

        <div class="buy t-a-center c-hand m-l10 f-size12 f-c-w">确定</div>
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
      priceMin: "",
      priceMax: ""
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
  .sort_ipt {
    background: none;
    border: 1px solid #ccc;
    outline: none;
    width: 80px;
    height: 30px;
    border-radius: 5px;
  }
  .reduce {
    margin: 0px 5px;
  }
  .buy {
    border: 1px solid #ccc;
    color: rgb(100, 100, 100);
    &:hover {
      background: rgb(241, 241, 241);
    }
  }
}
</style>