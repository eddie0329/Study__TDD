/* eslint-disable no-underscore-dangle */
const _state = {
  todos: {},
};

const _getters = {};

const SET_TODOS = 'SET_TODOS';

const _mutations = {
  [SET_TODOS](state, todos) {
    state.todos = todos;
  },
};

const _actions = {};

export default {
  namespaced: true,
  state: _state,
  getters: _getters,
  mutations: _mutations,
  actions: _actions,
};
