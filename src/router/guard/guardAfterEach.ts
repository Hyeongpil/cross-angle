import { NavigationFailure, RouteLocationNormalized } from 'vue-router';

export const guardAfterEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  failure?: NavigationFailure | void,
) => {
  // ex) send google analytics
};
