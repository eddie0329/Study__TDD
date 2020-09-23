import Vuex from 'vuex';

/**
 *
 * @param {array} moduleName
 * @param {array} states
 * @param {array} getters
 * @returns {object}
 */
export const createMockStore = (moduleNames, states, getters = []) => {
  const storeTemplate = {
    modules: {},
  };
  moduleNames.forEach((moduleName, index) => {
    storeTemplate.modules[moduleName] = {};
    storeTemplate.modules[moduleName].namespaced = true;
    storeTemplate.modules[moduleName].state = states[index];
    if (getters[index]) {
      storeTemplate.modules[moduleName].getters = getters[index];
    }
  });
  return new Vuex.Store(storeTemplate);
};
