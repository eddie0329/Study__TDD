import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import modulePatternStore from './modules/module-pattern-actual';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
    modulePatternStore,
  },
});
