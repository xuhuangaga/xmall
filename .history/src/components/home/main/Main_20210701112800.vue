<template>
  <div>
    <div class="box">
      <div class="title p-l15">{{ list.name }}</div>
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
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      arr: []
    };
  },
  components: {},
  methods: {
    //跳转
    goto(url, id,index) {
      if (index === 0) {
        //大图跳转详情
      } else {
        //小图跳转详情
        let routeUrl = this.$router.resolve({
          path: url,
          query: {
            id: id
          }
        });
        window.open(routeUrl.href, "_blank");
      }
    }
  },
  mounted() {
    // console.log(this.list);
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  margin: 20px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  .title {
    background: rgb(245, 245, 245);
    color: rgb(98, 105, 112);
    height: 60px;
    line-height: 60px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .content {
    border-top: 1px solid #ccc;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    flex-wrap: wrap;
    overflow: hidden;
    .bigImg {
      width: 100%;
      height: 430px;
      &:hover {
        box-shadow: 0 0 30px #ddd inset;
      }
    }
    .bigImg_dv {
      width: 50% !important;
      height: 430px;
      &:hover {
        animation: content_dv_hover1 0.7s forwards !important;
        box-shadow: 50px 50px 250px black inset !important;
      }
    }
    .content_dv {
      img {
        width: 100%;
        height: 100%;
      }
      background: #fff;
      height: 430px;
      width: 25%;
      .subtitle {
        color: #ccc;
      }
      .hot_btn {
        display: none;
      }
      .hot_btn div {
        border-radius: 4px;
        width: 70px;
        padding: 5px 12px;
      }
      .detal {
        border: 1px solid #ccc;
        color: rgb(100, 100, 100);
      }
      .car {
        border: 1px solid #5c81e3;
        background-color: #678ee7;
      }
      &:hover {
        animation: content_dv_hover 0.7s forwards;
        .hot_btn {
          display: flex !important;
          display: block;
        }
        .price {
          display: none;
        }
      }
    }
  }
}
// hover向上慢慢移动一定距离
@keyframes content_dv_hover {
  0% {
    box-shadow: 0px 0px 0px #999;
    transform: translateY(0px);
  }
  100% {
    box-shadow: 0px 0px 20px #999;
    transform: translateY(-4px);
  }
}
@keyframes content_dv_hover1 {
  // 0%{}
  // 100%{box-shadow: 100px 100px 200px #999 inset;border:1px solid red;}
}
</style>