<template>
  <div>
    <!-- 排序盒子 -->
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
    <!-- 商品列表 -->
    <div class="pro_box">
      <div class="flex-j-around a-center content bg-c-w">
        <div
          v-for="(item, index) in list.panelContents"
          :key="index"
          class="t-a-center content_dv"
          :class="{ bigImg_dv: index === 0 }"
          @click="goto('/detail', item.productId, index)"
        >
          <div class="c-hand">
            <img
              :src="item.picUrl"
              width="206"
              height="206"
              v-if="index !== 0"
            />
            <div
              v-else
              class="bigImg"
              :style="{
                'background-image': 'url(' + item.picUrl + ')',
                'background-size': '611px 429px'
              }"
            ></div>
          </div>
          <template v-if="index !== 0">
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
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      priceMax: "",
      search: "",
      page:1,
      pageSize:10
    };
  },
  components: {},
  methods: {
    //点击排序条件
    activeItem(index) {
      this.activeIndex = index;
    },
    //获取数据
    getData(){
      let query=`page=${page}&size=${pageSize}`
      
      axios.get(`/api/goods/allGoods?${query}`)
      .then(res=>{
        console.log(res);
      })
      .catch(error=>{
        this.$message.error(`请求失败.${error}`)
      })
    }
  },
  mounted() {
    this.getData()
  },
  computed: {},
  watch: {
    priceMin(val1) {
      //去空格
      if (String(val1).includes(" ")) {
        this.priceMin = String(val1).trim();
        return;
      }
      this.priceMin = String(val1).replace(/\s+/g, "");
      //验证输入的数量 只能是正整数
      if (val1 !== "") {
        if (!/^\d+$/.test(val1)) {
          this.priceMin = "";
          return;
        }
      }
    },
    priceMax(val1) {
      //去空格
      if (String(val1).includes(" ")) {
        this.priceMax = String(val1).trim();
        return;
      }
      //验证输入的数量 只能是正整数
      if (val1 !== "") {
        if (!/^\d+$/.test(val1)) {
          this.priceMax = "";
          return;
        }
      }
    }
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
    color: #999;
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
.pro_box {
  .content {
    flex-wrap: wrap;
    .content_dv {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>