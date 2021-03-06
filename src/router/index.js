import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Goods from '@/components/goods/Goods'
import Seller from '@/components/seller/Seller'
import Ratings from '@/components/ratings/Ratings'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    }
  ]
})
