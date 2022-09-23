import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const rotas: RouteRecordRaw[] = [{
  path: '/',
  name: 'Sobre',
  component: () => import('../views/Sobre.vue')
}, {
  path: '/palestras',
  name: 'Palestras',
  component: () => import('../views/Palestras.vue')
},
{
  path: '/palestra/:id',
  name: 'Palestra',
  component: () => import('../views/../views/Palestra.vue'),
}
]

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas
})

export default roteador;