/* eslint-disable no-underscore-dangle */
import { nanoid } from 'nanoid';
import _cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';

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
export const SET_TODO_IDS = 'SET_TODO_IDS';

const _mutations = {
  [SET_TODOS](state, todos) {
    state.todos = todos;
  },

  [SET_TODO_IDS](state, ids) {
    state.todoIds = ids;
  },

  [DELETE_TODO](state, id) {
    delete state.todos[id];
  },

  [ADD_TODO_ID](state, id) {
    state.todoIds.unshift(id);
  },

  [DELETE_TODO_ID](state, id) {
    const idIndex = state.todoIds.findIndex((todoId) => todoId === id);
    state.todoIds.splice(idIndex, 1);
  },

  [SET_TODO_DONE](state, { id, status }) {
    state.todos[id].isDone = status;
  },

  [SET_TODO_INPUT](state, todoInput) {
    state.todoInput = todoInput;
  },
};

// ACTION TYPES
export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';
export const GET_TODOS = 'GET_TODOS';

const _actions = {
  async [GET_TODOS]({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/todos');
      const { data } = response;
      console.log(data);
      const ids = data.sort((a, b) => new Date(b.date) - new Date(a.date)).map(datum => datum._id);
      const todos = data.reduce((a, c) => {
        a[c._id] = c;
        return a;
      }, {});
      commit(SET_TODO_IDS, ids);
      commit(SET_TODOS, todos);
    } catch (err) {
      console.error(err);
    }
  },
  async [CREATE_TODO]({ state, commit }) {
    // const { todos, todoInput } = state;
    const { todos, todoInput } = state;
    if (todoInput === '') {
      return;
    }
    try {
      const postedTodo = await axios.post('http://localhost:3000/todos', { title: todoInput });
      const { data } = postedTodo;
      const clonedTodos = _cloneDeep(todos);
      clonedTodos[data._id] = data;
      commit(SET_TODOS, clonedTodos);
      commit(ADD_TODO_ID, data._id);
      commit(SET_TODO_INPUT, '');
    } catch (err) { 
      console.error(err);
    }
  },

  async [REMOVE_TODO]({ commit }, id) {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      commit(DELETE_TODO_ID, id);
      commit(DELETE_TODO, id);
    } catch (err) {
      console.error(err);
    }
  },

  async [CHANGE_TODO_STATUS]({ state, commit }, id) {
    const { todos } = state;
    console.log(id);
    try {
      const status = !todos[id].isDone;
      const temp = await axios.patch(`http://localhost:3000/todos/todoStatus/${id}`, { isDone: status });
      console.log(temp);
      commit(SET_TODO_DONE, { id, status });
    } catch (err) {
      console.error(err);
    }
  },
};

export default {
  namespaced: true,
  state: _state,
  getters: _getters,
  mutations: _mutations,
  actions: _actions,
};
