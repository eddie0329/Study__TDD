const state = {
  count: 0,
};

const getters = {
  isCountZero: state => state.count === 0,
};

// mutations type

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_COUNT_VALUE = 'SET_COUNT_VALUE';

const mutations = {
  [INCREMENT](state) {
    state.count += 1;
  },

  [DECREMENT](state) {
    state.count -= 1;
  },

  [SET_COUNT_VALUE](state, countValue) {
    state.count = countValue;
  },
};

// actions type
const CHANGE_COUNT_VALUE = 'CHANGE_COUNT_VALUE';

const actions = {
  [CHANGE_COUNT_VALUE]({ commit }, countValue) {
    commit(SET_COUNT_VALUE, countValue);
  },
};

export default { namespaced: true, state, getters, mutations, actions };
