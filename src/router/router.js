import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../modules/HomePage/HomePage";
import DefaultLayout from "../core/components/layout/DefaultLayout";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/',
      component: DefaultLayout,
      meta: {guest: true},
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        }
      ]
    }
  ]
})

export default router;