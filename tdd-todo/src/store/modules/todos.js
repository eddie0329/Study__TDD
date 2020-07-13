/* eslint-disable no-underscore-dangle */
const _state = {
  todos: {},
  todoIds: [],
};

const _getters = {};

const SET_TODOS = 'SET_TODOS';
const ADD_TODO_ID = 'ADD_TODO_ID';

const _mutations = {
  [SET_TODOS](state, todos) {
    state.todos = todos;
  },

  [ADD_TODO_ID](state, id) {
    state.todoIds.unshift(id);
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
