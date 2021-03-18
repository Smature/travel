import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


const index =()=>import('../pages/index')
const register =()=>import('../pages/register')
const home =()=>import('../pages/home')
const cate =()=>import('../pages/cate')
const goodsList =()=>import('../pages/goodsList')
const cart =()=>import('../pages/cart')
const login =()=>import('../pages/login')
const mime =()=>import('../pages/mime')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: index,
      children:[
        {
          path: 'home',
          component: home,
        },
        {
          path: 'cate',
          component: cate,
        },
        {
          path: 'cart',
          component: cart,
        },
        {
          path: 'mime',
          component: mime,
        },
      ]
    },
    {
      path: 'login',
      component: login,
    },
    {
      path: 'register',
      component: register,
    },
    {
      path: 'goodsList',
      component: goodsList,
    },
    {
      path:'*',
      redirect:'/login',
    }
  ]
})
