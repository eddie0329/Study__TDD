import counterStore from '@/store/modules/counter';
import { fetchData } from '@/api/todo-service';

jest.mock('@/api/todo-service');

const { getters, mutations, actions } = counterStore;

const { isCountZero } = getters;

describe('Getters test', () => {
  describe('isCountZero test', () => {
    it('count 0 should be true', () => {
      const state = { count: 0 };
      expect(isCountZero(state)).toBeTruthy();
    });
    it('count 1 should be false', () => {
      const state = { count: 1 };
      expect(isCountZero(state)).toBeFalsy();
    });
  });
});

const { INCREMENT, DECREMENT } = mutations;

describe('Mutation test', () => {
  const state = { count: 0 };
  beforeEach(() => {
    state.count = 0;
  });
  describe('Increment test', () => {
    it('Increment state by 1', () => {
      INCREMENT(state);
      expect(state.count).toBe(1);
    });
  });

  describe('Decrement test', () => {
    it('Decrement state by 1', () => {
      DECREMENT(state);
      expect(state.count).toBe(-1);
    });
  });
});

const { CHANGE_COUNT_VALUE, FETCH_ITEMS } = actions;

describe('Action test', () => {
  describe('CHANGE_COUNT_VALUE test', () => {
    it('change count value by 10', () => {
      const commit = jest.fn();
      CHANGE_COUNT_VALUE({ commit }, 10);
      expect(commit).toHaveBeenCalledWith('SET_COUNT_VALUE', 10);
    });
  });
});

describe('Async actions test', () => {
  describe('Fetch items test', () => {
    it('get items from mock', async () => {
      const items = {
        data: [1, 2, 3],
      };
      fetchData.mockResolvedValue(items);
      const commit = jest.fn();
      await FETCH_ITEMS({ commit });
      expect(commit).toHaveBeenCalledWith('SET_ITEMS', items.data);
    });
  });
});
