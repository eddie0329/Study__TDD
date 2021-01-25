import counterStore, { getDefaultState } from '@/store/modules/counter';
import { fetchData } from '@/api/todo-service';
import { mockItems } from '../__mock__/item-mock';

jest.mock('@/api/todo-service');

const { state, getters, mutations, actions } = counterStore;

describe('State test', () => {
  it('state should be equal getDeFaultState()', () => {
    expect(state).toEqual(getDefaultState());
  });
});

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
  let state;
  beforeEach(() => {
    state = getDefaultState();
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
      fetchData.mockResolvedValue(mockItems);
      const commit = jest.fn();
      const dispatch = jest.fn();
      await FETCH_ITEMS({ commit, dispatch });
      expect(commit).toHaveBeenCalledWith('SET_ITEMS', mockItems.data);
      expect(dispatch).toBeCalledTimes(1);
    });
  });
});

describe('action test', () => {
  const { TEST_ACTION } = actions;
  it('test', async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();

    dispatch.mockImplementation(actionName => {
      actions[actionName]({ commit });
    });

    await TEST_ACTION({ dispatch });
    expect(commit).toHaveBeenCalledWith('INCREMENT');
    expect(commit).toHaveBeenCalledWith('DECREMENT');
  });
});
