import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
  } from 'vue-router';
  
  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue"),
      
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("../views/AboutUs.vue")
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('../views/ErrorPage.vue'),
    },
  ]
  
  const router = createRouter({
      history: createWebHistory(),
      routes
  }) 
  
  export default router;