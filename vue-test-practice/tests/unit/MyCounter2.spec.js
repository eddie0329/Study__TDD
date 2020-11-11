import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import MyCounter2 from '../../src/components/MyCounter2.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MyCounter2 test', () => {
  let store;
  let state;
  let actions;
  let mutations;
  let wrapper;
  let vm;
  beforeEach(() => {
    state = {
      count: 0,
    };
    mutations = {
      ['INCREMENT']: jest.fn(),
      ['DECREMENT']: jest.fn(),
    };
    actions = {
      ['FETCH_ITEMS']: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        counter: {
          namespaced: true,
          state,
          mutations,
          actions,
        },
      },
    });
    wrapper = mount(MyCounter2, { store, localVue });
    vm = wrapper.vm;
  });
  it('count mock', async () => {
    expect(vm.count).toBe(0);
  });
  it('mutations mock', () => {
    const incBtn = wrapper.find('#incBtn');
    incBtn.trigger('click');
    expect(mutations.INCREMENT).toHaveBeenCalled();

    const decBtn = wrapper.find('#decBtn');
    decBtn.trigger('click');
    expect(mutations.DECREMENT).toHaveBeenCalled();
  });
  it('actions mock', () => {
    const fetchBtn = wrapper.find('.fetchBtn');
    fetchBtn.trigger('click');
    expect(actions.FETCH_ITEMS).toHaveBeenCalled();
  });
});
