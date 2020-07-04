import { fetchData } from '@/api/todo-service';

const state = {
  count: 0,
  items: [],
};

const getters = {
  isCountZero: state => state.count === 0,
};

// mutations type

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_COUNT_VALUE = 'SET_COUNT_VALUE';
const SET_ITEMS = 'SET_ITEMS';

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

  [SET_ITEMS](state, items) {
    state.items = items;
  },
};

// actions type
const CHANGE_COUNT_VALUE = 'CHANGE_COUNT_VALUE';
export const FETCH_ITEMS = 'FETCH_ITEMS';

const actions = {
  [CHANGE_COUNT_VALUE]({ commit }, countValue) {
    commit(SET_COUNT_VALUE, countValue);
  },

  async [FETCH_ITEMS]({ commit }) {
    const response = await fetchData();
    commit(SET_ITEMS, response.data);
  },
};

export default { namespaced: true, state, getters, mutations, actions };
