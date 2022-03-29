import { RouteRecordRaw } from 'vue-router';

import { lazyLoadPage } from '../helper';

export const errorRouteNames = {
  notFoundPage: 'notFoundPage',
  forbiddenPage: 'forbiddenPage',
} as const;

export const errorRoutes: Array<RouteRecordRaw> = [
  {
    path: '/error404',
    name: errorRouteNames.notFoundPage,
    component: () => lazyLoadPage('NotFoundPage'),
  },
  {
    path: '/error403',
    name: errorRouteNames.forbiddenPage,
    component: () => lazyLoadPage('ForbiddenPage'),
  },
];
