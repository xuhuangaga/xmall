<template>
  <div>
    <div class="flex a-center p-tb20 sort">
      <div class="f-size12 flex a-center">
        <div
          class="m-lr10 c-hand nav"
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
  watch: {
    priceMin(){},
    priceMax(){}
  }
};
</script>

<style lang='scss' scoped>
.sort {
  .nav {
    padding: 3px;
  }
  .sort_ipt {
    background: none;
    border: 1px solid #ccc;
    outline: none;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    color:#999
  }
  .reduce {
    margin: 0px 5px;
  }
  .buy {
    width: 90px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    background: rgb(89, 129, 226);
    &:hover {
      background: rgb(79, 112, 198);
    }
  }
}
</style>