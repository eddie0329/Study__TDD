import { createModulePatternStore, getDefaultState } from '../../src/store/modules/module-pattern-store';

// mock function
const fetchTodos = jest.fn();

const { state, getters, mutations, actions } = createModulePatternStore({ fetchTodos });

describe('createModulePatternStore test', () => {
  describe('state test', () => {
    it('default state test', () => {
      expect(state).toEqual(getDefaultState());
    });
  });

  describe('getters test', () => {
    const { nameUpperCase } = getters;
    it('nameUpperCase test', () => {
      expect(nameUpperCase(state)).toEqual('EDDIE');
    });
  });

  describe('mutations test', () => {
    const { SET_TODOS } = mutations;
    let mockState;
    beforeEach(() => {
      mockState = getDefaultState();
    });
    it('SET_TODOS test', () => {
      const newTodos = [{ title: 'hello', id: 1, done: false }];
      SET_TODOS(mockState, newTodos);
      expect(mockState.todos).toEqual(newTodos);
    });
  });

  describe('actions test', () => {
    const { GET_TODOS } = actions;
    let commit;
    beforeEach(() => {
      commit = jest.fn();
    });
    it('GET_TODOS test', async () => {
      fetchTodos.mockResolvedValue({ data: [{ title: 'hello', id: 1, done: false }] });
      await GET_TODOS({ commit });
      expect(commit).toHaveBeenCalledWith('SET_TODOS', [{ title: 'hello', id: 1, done: false }]);
    });
  });
});
