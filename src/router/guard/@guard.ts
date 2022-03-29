import { ComponentPublicInstance } from 'vue';
import { NavigationGuard, RouteLocationRaw } from 'vue-router';

declare type NavigationGuardNextCallback = (vm: ComponentPublicInstance) => any;
export type NavigationGuardReturn = void | Error | RouteLocationRaw | boolean | NavigationGuardNextCallback;

export function composeNavigationGuards(...guards: NavigationGuard[]): NavigationGuard {
  return async (to, from, next) => {
    const callbacks: NavigationGuardNextCallback[] = [];

    for (const guard of guards) {
      const result = await new Promise<NavigationGuardReturn>((resolve) => guard(to, from, resolve));
      // 네비게이션 중단
      if (result === false) {
        next(false);
        return;
        // 에러
      } else if (result instanceof Error) {
        next(result);
        return;
        // 콜백
      } else if (typeof result === 'function') {
        callbacks.push(result as NavigationGuardNextCallback);
        break;
        // 리디렉션
      } else if (result && result !== true) {
        next(result);
        return;
      }
    }

    if (callbacks.length) {
      next((vm) => {
        for (const cb of callbacks) {
          cb(vm);
        }
      });
    } else {
      next(void 0);
    }
  };
}
