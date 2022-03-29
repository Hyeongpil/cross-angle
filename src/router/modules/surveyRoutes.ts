import { RouteRecordRaw } from 'vue-router';

import { PERMISSION_TYPE } from '@/constants/permission.constants';
import { guardSample } from '@/router/guard/guardSample';
import { lazyLoadPage } from '@/router/helper';

export const surveyRouteNames = {
  surveyPage: 'surveyPage',
} as const;

export const surveyRoutes: Array<RouteRecordRaw> = [
  {
    path: '/survey',
    name: surveyRouteNames.surveyPage,
    component: () => lazyLoadPage('Survey'),
  },
  // { sample
  //   path: '/about',
  //   name: surveyRouteNames.aboutPage,
  //   component: () => lazyLoadPage('About'),
  //   meta: {
  //     permission: PERMISSION_TYPE.ADMIN,
  //   },
  //   beforeEnter: guardSample,
  // },
];
