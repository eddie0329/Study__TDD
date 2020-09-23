import { createMockStore } from '../../src/stories/utils';
import Vuex from 'vuex';

jest.mock('vuex', () => ({
  __esModule__: true,
  Store: jest.fn(),
}));

// return originals
afterAll(() => {
  Vuex.Store.mockRestore();
});

describe('storybook util test', () => {
  describe('createMockStore test', () => {
    // Mocking Vuex.Store function
    Vuex.Store.mockImplementation(arg => arg);
    it('create single store test only state', () => {
      expect(createMockStore(['counter'], [{ count: 0 }])).toEqual({
        modules: {
          counter: {
            namespaced: true,
            state: { count: 0 },
          },
        },
      });
    });
    it('create single store test with getters and states', () => {
      expect(createMockStore(['counter'], [{ count: 0 }], [{ countStatus: true }])).toStrictEqual({
        modules: {
          counter: {
            namespaced: true,
            state: { count: 0 },
            getters: { countStatus: true },
          },
        },
      });
    });
    it('create mutiple store', () => {
      const mockStores = {
        modules: {
          counter: {
            namespaced: true,
            state: { count: 0 },
            getters: { countStatus: true },
          },
          todos: {
            namespaced: true,
            state: { todos: [] },
          },
        },
      };
      expect(
        createMockStore(['counter', 'todos'], [{ count: 0 }, { todos: [] }], [{ countStatus: true }])
      ).toMatchObject(mockStores);
    });
  });
});
