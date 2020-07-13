/* eslint-disable no-underscore-dangle */
const _state = {
  todos: {},
  todoIds: [],
};

const _getters = {};

// MUTATION TYPES
const SET_TODOS = 'SET_TODOS';
const DELETE_TODO = 'DELETE_TODO';
const ADD_TODO_ID = 'ADD_TODO_ID';
const DELETE_TODO_ID = 'DELETE_TODO_ID';

const _mutations = {
  /**
   *
   * @param {object} state
   * @param {object} todos
   */
  [SET_TODOS](state, todos) {
    state.todos = todos;
  },

  /**
   *
   * @param {object} state
   * @param {string} id
   */
  [DELETE_TODO](state, id) {
    delete state.todos[id];
  },

  /**
   *
   * @param {object} state
   * @param {string} id
   */
  [ADD_TODO_ID](state, id) {
    state.todoIds.unshift(id);
  },

  /**
   *
   * @param {object} state
   * @param {number} index
   */
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
