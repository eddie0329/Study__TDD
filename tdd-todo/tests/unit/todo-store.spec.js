import todosStore from '@/store/modules/todos';
import mockData from '../__mock__/todo-mock';

const { mutations } = todosStore;

const { ADD_TODO } = mutations;

describe('Mutation test', () => {
  describe('ADD_TODO test', () => {
    it('test1 add -> state = todos: { title: test1, ...}', () => {
      const state = { todos: {} };
      ADD_TODO(state, mockData.singleMockTodo);
      expect(state.todos).toEqual({
        1: { title: 'test1', id: 1, isTodoDone: false },
      });
    });
  });
});
