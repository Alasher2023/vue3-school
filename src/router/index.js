import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/new',
      name: 'NewfeeCalculator',
      component: () => import('@/views/NewFeeCalculator.vue')
    },
    {
      path: '/oldCal',
      name: 'feeCalculator',
      component: () => import('@/views/feeCalculator.vue')
    },
    {
      path: '/',
      name: 'Diff',
      component: () => import('../views/DiffFeeCalc.vue')
    }
  ]
})

export default router
