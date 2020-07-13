import todosStore from '@/store/modules/todos';
import mockData from '../__mock__/todo-mock';

const { mutations } = todosStore;

const { SET_TODOS } = mutations;

describe('Mutation test', () => {
  describe('SET_TODO test', () => {
    it('set todos -> state = todos: { title: test1, ...}', () => {
      const state = { todos: {} };
      SET_TODOS(state, mockData.singleItemTodos);
      expect(state.todos).toEqual(mockData.singleItemTodos);
    });
  });
});
