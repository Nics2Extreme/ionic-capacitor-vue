import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import OrderPage from "@/views/OrderPage.vue";
import PointsPage from "@/views/PointsPage.vue";
import ItemPage from "@/views/ItemPage.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/order',
    component: OrderPage
  },
  {
    path: '/points',
    component: PointsPage
  },
  {
    path: '/item',
    component: ItemPage
  },
  {
    path: '/checkout',
    component: CheckoutPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
