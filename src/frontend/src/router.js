import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./pages/index.vue'),
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('./pages/home.vue'),
  },

  {
    path: '/registro',
    name: 'registro',
    component: () => import('./pages/registro.vue'),
  },

  {
    path: '/logintest',
    name: 'logintest',
    component: () => import('./pages/logintest.vue'),
  },

  {
    path: '/tipoDeCuenta',
    name: 'tipoDeCuenta',
    component: () => import('./pages/tipoDeCuenta.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;