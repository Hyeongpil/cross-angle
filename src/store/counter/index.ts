import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

import { store } from '@/store';

@Module({ dynamic: true, store: store, namespaced: true, name: 'counter' })
export default class Counter extends VuexModule {
  _state = { count: 0 };

  get count() {
    return this._state.count;
  }

  @Mutation
  increment(delta: number) {
    this._state.count += delta;
  }
  @Mutation
  decrement(delta: number) {
    this._state.count -= delta;
  }

  @Action({ commit: 'increment' })
  incr() {
    return 5;
  }

  @Action({ commit: 'decrement' })
  decr() {
    return 5;
  }
}

export const counterStore = getModule(Counter);
