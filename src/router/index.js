import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
          title:'首页'
        }
      },
      {
        path: '/detail',
        name: 'Detail',
        component: ()=>import('../views/product/Detail.vue'),
        meta:{
          title:'详情'
        }
      },
       {
        path: '/list',
        name: 'List',
        component: ()=>import('../views/product/List.vue'),
        meta:{
          title:'全部商品'
        }
      },,
      {
       path: '/demo',
       name: 'Demo',
       component: ()=>import('../views/demo/Demo.vue'),
       meta:{
         title:'测试'
       }
     },
    ]
  }
  ,
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/login/Login.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path:'/register',
    name:'Register',
    component:()=>import('../views/register/Register.vue'),
    meta:{
      title:'注册'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  document.title='XMall商城'
  // document.title=to.meta.title
  next()
})
export default router
