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

        <div
          class="buy t-a-center c-hand m-l10 f-size12 f-c-w"
          @click="btnSearch"
        >
          确定
        </div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="pro_box">
      <div v-if="list.length === 0" class=" p-tb20 t-a-center f-size14">
        暂无数据 ... ...
      </div>
      <div class="flex a-center content bg-c-w" v-else>
        <div
          v-for="(item, index) in list"
          :key="index"
          class="t-a-center content_dv"
          @click="goto('/detail', item.productId)"
        >
          <div class="c-hand">
            <img :src="item.productImageBig" width="206" height="206" />
          </div>
          <div>{{ item.productName }}</div>
          <div class="f-size12 m-t-b10 subtitle">{{ item.subTitle }}</div>
          <div class="t-a-center">
            <div class="f-w-bold m-t20 price">
              ￥{{ Math.round((item.salePrice * 100) / 100).toFixed(2) }}
            </div>
          </div>
          <div class="hot_btn f-size12 flex-j-center a-center m-t20">
            <div size="small" class="detal c-hand">查看详情</div>
            <div
              size="small"
              type="primary"
              class="car f-c-w c-hand m-l10"
              @click.stop="addCar(item.productId)"
            >
              加入购物车
            </div>
          </div>
        </div>
      </div>
      <div class="t-a-right m-t-b20 list_page_dv">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[8, 20, 40, 80]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      activeIndex: 0,
      sort: [
        {
          name: "综合排序"
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
      page: 1,
      pageSize: 20,
      list: [],
      total: 0
    };
  },
  components: {},
  methods: {
    //按照价格搜索
    btnSearch() {
      this.getData();
    },
    //跳转产品详情页面
    goto(url, id) {
      let routeUrl = this.$router.resolve({
        path: url,
        query: {
          id: id
        }
      });
      window.open(routeUrl.href, "_blank");
    },
    //点击排序条件
    activeItem(index) {
      this.activeIndex = index;
      this.getData();
    },
    //获取数据
    getData() {
      //请求数据  可填参数 page size
      let query = `page=${this.page}&size=${this.pageSize}`;
      //升序
      if (this.activeIndex === 1) {
        query += `&sort=1`;
      } else if (this.activeIndex === 2) {
        //降序
        query += `&sort=-1`;
      }
      //输入的最小价格
      if (this.priceMin) {
        query += `&priceGt=${this.priceMin}`;
      }
      //输入的最大价格
      if (this.priceMax) {
        query += `&priceLte=${this.priceMax}`;
      }
      axios
        .get(`/api/goods/allGoods?${query}`)
        .then(res => {
          // console.log(res);
          if (res.data.code === 200) {
            this.list = res.data.data;
            this.total = res.data.total;
            // console.log(this.list);
          }
        })
        .catch(error => {
          this.$message.error(`请求失败.${error}`);
        });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.getData();
    },
    //加入购物车
    addCar(id) {
      this.$emit("addCar", id);
    }
  },
  mounted() {
    this.getData();
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
  border: none !important;
  .content {
    border: none !important;
    flex-wrap: wrap;
    .content_dv {
      img {
        width: 100%;
        height: 100%;
      }
      border-bottom: 1px solid #eee;
      border-right: 1px solid #eee;
      width: 24.93% !important;
      &:nth-child(4n) {
        border-right: none !important;
      }
    }
  }
}
</style>