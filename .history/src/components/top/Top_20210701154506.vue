<template>
  <div class="box p-relative">
    <Car></Car>
    <div class=" flex-j-between a-center home__top_dv">
      <div class="c-hand">
        <img src="../../assets/images/home_logo.png" />
      </div>
      <div class=" flex-j-center a-center f-size14">
        <div>
          <el-input
            v-model="search"
            placeholder="请输入商品信息"
            @keyup.enter.native="select"
          >
            <i class="iconfont icon-sousuo" slot="suffix"> </i>
          </el-input>
        </div>
        <div class="f-c-w top_dv c-hand">全部商品</div>
        <div class="f-c-w top_dv c-hand">捐赠</div>
        <div class="top_sh top_dv">|</div>
        <div class="top_dv c-hand"><i class="iconfont icon-yonghu"></i></div>
        <div class="top_dv flex-j-center a-center">
          <div class=" flex-j-center a-center">
            <div class=" c-hand"><i class="iconfont icon-gouwuche"></i></div>
            <div class="car_num">0</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Car from '../../components/top/car/Car';
import axios from 'axios';
export default {
  name: "",
  props: {},
  data() {
    return {
      search: "",
      carList:[]
    };
  },
  components: {Car},
  methods: {
    //搜索
    select(){
      console.log('进搜索啦');
    },
    //获取购物车数据
     getCarData(){
       axios.get('/api/goods/getCart')
       .then(res=>{
         console.log(res);
       })
       .catch(error=>{
         this.$message.error(`请求失败!${error}`)
       })
     }
  },
  mounted() {
   this.getCarData()
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}

.box {
  .home__top_dv {
    .icon-sousuo {
      font-style: 12px;
      font-weight: bold;
    }
    .top_sh {
      color: #ccc;
    }
    .icon-yonghu {
      color: #ccc;
      font-size: 20px;
    }
    .icon-gouwuche {
      color: #ccc;
      font-size: 25px;
      margin-right: 3px;
    }
    .car_num {
      border-radius: 100%;
      color: #fff;
      background: #999;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
    .top_dv {
      padding: 0px 20px;
    }
  }
}
</style>