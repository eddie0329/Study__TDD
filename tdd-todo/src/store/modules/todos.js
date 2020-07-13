/* eslint-disable no-underscore-dangle */
const _state = {
  todos: {},
  todoIds: [],
};

const _getters = {};

const SET_TODOS = 'SET_TODOS';
const DELETE_TODO = 'DELETE_TODO';
const ADD_TODO_ID = 'ADD_TODO_ID';
const DELETE_TODO_ID = 'DELETE_TODO_ID';

const _mutations = {
  [SET_TODOS](state, todos) {
    state.todos = todos;
  },

  [DELETE_TODO](state, id) {
    delete state.todos[id];
  },

  [ADD_TODO_ID](state, id) {
    state.todoIds.unshift(id);
  },

  [DELETE_TODO_ID](state, index) {
    state.todoIds.splice(index, 1);
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
