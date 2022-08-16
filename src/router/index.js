import { createRouter, createWebHashHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'hello-world',
    component: HelloWorld,
  },
  {
    path: '/first',
    name: 'first',
    component: () => import('../components/FirstComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
