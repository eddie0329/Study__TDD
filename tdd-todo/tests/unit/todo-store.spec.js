import { nanoid } from 'nanoid';
import todosStore, { createTodoTemplate } from '../../src/store/modules/todos';
import mockData from '../__mock__/todo-mock';

jest.mock('nanoid');

nanoid.mockImplementation(() => {
  let value = 0;
  const result = String(value += 1);
  return result;
});

afterAll(() => {
  nanoid.mockRestore();
});

describe('Util test', () => {
  describe('createTodoTemplate test', () => {
    it('title: hello test => { id: ..., title: hello test, isTodoDone: false }', () => {
      expect(createTodoTemplate('hello test')).toEqual({
        id: '1',
        title: 'hello test',
        isTodoDone: false,
      });
      expect(createTodoTemplate('hello test').title).toEqual('hello test');
      expect(createTodoTemplate('hello test').isTodoDone).toBeFalsy();
    });
  });
});

const { mutations } = todosStore;

const {
  SET_TODOS,
  ADD_TODO_ID,
  DELETE_TODO_ID,
  DELETE_TODO,
  SET_TODO_DONE,
  SET_TODO_INPUT,
} = mutations;

describe('Mutation test', () => {
  describe('SET_TODOS test', () => {
    it('set todos -> state = todos: { title: test1, ...}', () => {
      const state = { todos: {} };
      SET_TODOS(state, mockData.singleItemTodos);
      expect(state.todos).toEqual(mockData.singleItemTodos);
    });
  });

  describe('DELETE_TODO test', () => {
    it('DELETE_TODO(id), id: 1 -> todos: { 1: { title....} } -> todos: {}', () => {
      const state = { todos: { ...mockData.singleItemTodos } };
      DELETE_TODO(state, 1);
      expect(state.todos).toEqual({});
    });
  });

  describe('ADD_TODO_ID test', () => {
    const state = { todoIds: [] };
    // init todo ids
    beforeEach(() => {
      state.todoIds = [];
    });

    it('add todo id 1 -> ids: [1]', () => {
      ADD_TODO_ID(state, 1);
      expect(state.todoIds).toEqual([1]);
    });

    it('add todo id 1, 2 -> ids: [2, 1]', () => {
      ADD_TODO_ID(state, 1);
      ADD_TODO_ID(state, 2);
      expect(state.todoIds).toEqual([2, 1]);
    });
  });

  describe('DELETE_TODO_ID', () => {
    it('delete todo id [2, 1, 3] index 0 -> [1, 3]', () => {
      const state = { todoIds: [2, 1, 3] };
      DELETE_TODO_ID(state, 0);
      expect(state.todoIds).toEqual([1, 3]);
    });

    it('delete todo id [2, 1, 3] index 1 -> [2, 3]', () => {
      const state = { todoIds: [2, 1, 3] };
      DELETE_TODO_ID(state, 1);
      expect(state.todoIds).toEqual([2, 3]);
    });
  });

  describe('SET_TODO_DONE', () => {
    const state = { todos: mockData.singleItemTodos };
    it('set todo done true', () => {
      SET_TODO_DONE(state, { id: '1', status: true });
    });
    it('set todo done false', () => {
      SET_TODO_DONE(state, { id: '1', status: false });
    });
  });

  describe('SET_TODO_INPUT', () => {
    const state = { todoInput: '' };
    it('set todo input -> a', () => {
      SET_TODO_INPUT(state, 'a');
    });
    it('set todo input -> abc', () => {
      SET_TODO_INPUT(state, 'abc');
    });
  });
});

const { actions } = todosStore;
const { CREATE_TODO } = actions;

describe('Action test', () => {
  describe('CREATE_TODO test', () => {
    it('create todo -> state.todo = { id: ..., title: test, isTodoDone: false', () => {
      const commit = jest.fn();
      const state = { todos: {}, todoInput: 'test1' };
      CREATE_TODO({ state, commit });
      expect(commit).toHaveBeenCalledWith(
        'SET_TODOS',
        mockData.singleItemTodos,
      );
      expect(commit).toHaveBeenCalledWith('ADD_TODO_ID', '1');
    });
  });
});
