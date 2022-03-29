import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { RouteMeta } from '../types';

const guardPermission = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const { meta } = to as RouteMeta;

  // ex) permission check
  return next();
};

export const guardBeforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  guardPermission(to, from, next);
};
