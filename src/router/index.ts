import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { guardAfterEach, guardBeforeEach } from './guard';
import { lazyLoadPage } from './helper';
import { errorRoutes, surveyRoutes } from './modules';

export const commonRouteNames = {
  homePage: 'homePage',
  welcomePage: 'welcomePage',
} as const;

const routes: Array<RouteRecordRaw> = [
  ...surveyRoutes,
  ...errorRoutes,
  {
    path: '/',
    name: commonRouteNames.homePage,
    component: () => lazyLoadPage('Home'),
  },
  {
    path: '/welcome',
    name: commonRouteNames.welcomePage,
    component: () => lazyLoadPage('Welcome'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => lazyLoadPage('error/NotFoundPage'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(guardBeforeEach);
router.afterEach(guardAfterEach);

export default router;
