// import { fetchData } from '@/api/todo-service';
import { fetchData } from '../../api/todo-service';

export const getDefaultState = () => ({
  count: 0,
  items: [],
});

const getters = {
  isCountZero: state => state.count === 0,
};

// mutations type

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
const SET_COUNT_VALUE = 'SET_COUNT_VALUE';
const SET_ITEMS = 'SET_ITEMS';

export const getDefaultMutations = () => ({
  [INCREMENT](state) {
    state.count += 1;
  },

  [DECREMENT](state) {
    state.count -= 1;
  },
});

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
const TEST_ACTION = 'TEST_ACTION';
const INC = 'INC';
const DEC = 'DEC';

const actions = {
  async [TEST_ACTION]({ dispatch }) {
    await dispatch(INC);
    await dispatch(DEC);
  },

  [INC]({ commit }) {
    commit(INCREMENT);
  },

  [DEC]({ commit }) {
    commit(DECREMENT);
  },

  [CHANGE_COUNT_VALUE]({ commit }, countValue) {
    commit(SET_COUNT_VALUE, countValue);
  },

  async [FETCH_ITEMS]({ commit, dispatch }) {
    const response = await fetchData();
    commit(SET_ITEMS, response.data);
    dispatch(CHANGE_COUNT_VALUE, 0);
  },
};

export default { namespaced: true, state: getDefaultState(), getters, mutations, actions };
