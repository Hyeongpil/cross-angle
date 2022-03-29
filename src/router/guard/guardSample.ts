import { NavigationGuard } from 'vue-router';

const isSample = true;

export const guardSample: NavigationGuard = (to, from, next) => {
  if (isSample) {
    next();
  } else {
    console.log('isSample is false');
  }
};
