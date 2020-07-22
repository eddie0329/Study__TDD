/* eslint-disable no-underscore-dangle */
import { nanoid } from 'nanoid';
import _cloneDeep from 'lodash/cloneDeep';

export const createTodoTemplate = (title) => {
  const template = {};
  template.id = nanoid();
  template.title = title;
  template.isTodoDone = false;
  return template;
};

const _state = {
  todos: {},
  todoIds: [],
  todoInput: '',
};

const _getters = {};

// MUTATION TYPES
export const SET_TODOS = 'SET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO_ID = 'ADD_TODO_ID';
export const DELETE_TODO_ID = 'DELETE_TODO_ID';
export const SET_TODO_DONE = 'SET_TODO_DONE';
export const SET_TODO_INPUT = 'SET_TODO_INPUT';

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

  [SET_TODO_DONE](state, { id, status }) {
    state.todos[id].isTodoDone = status;
  },

  [SET_TODO_INPUT](state, todoInput) {
    state.todoInput = todoInput;
  },
};

// ACTION TYPES
export const CREATE_TODO = 'CREATE_TODO';

const _actions = {
  [CREATE_TODO]({ state, commit }) {
    const { todos, todoInput } = state;
    if (todoInput === '') {
      return;
    }
    const clonedTodos = _cloneDeep(todos);
    const todo = createTodoTemplate(todoInput);
    const todoId = todo.id;
    clonedTodos[todoId] = todo;
    commit(SET_TODOS, clonedTodos);
    commit(ADD_TODO_ID, todoId);
    commit(SET_TODO_INPUT, '');
  },
};

export default {
  namespaced: true,
  state: _state,
  getters: _getters,
  mutations: _mutations,
  actions: _actions,
};
