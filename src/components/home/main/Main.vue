<template>
  <div>
    <div class="pro_box">
      <div class="title p-l15">{{ list.name }}</div>
      <div class="flex a-center content bg-c-w">
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
              <div class="f-w-bold m-t20 price">￥{{ Math.round((item.salePrice * 100) / 100).toFixed(2) }}</div>
            </div>
            <div class="hot_btn f-size12 flex-j-center a-center m-t20">
              <div size="small" class="detal c-hand">查看详情</div>
              <div size="small" type="primary" class="car f-c-w c-hand m-l10" @click.stop="addCar(item.productId)">
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
    goto(url, id, index) {
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
    },
    //加入购物车
    addCar(id){
      this.$emit('addCar', id);
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
.pro_box {
  .content {
    flex-wrap: wrap;
    .content_dv {
      img {
        width: 100%;
        height: 100%;
      }
    }
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
  }
}

@keyframes content_dv_hover1 {
}
</style>