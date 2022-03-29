import Vuex from 'vuex';

const noProd = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: noProd,
});
