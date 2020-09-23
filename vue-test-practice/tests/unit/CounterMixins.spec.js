import { shallowMount } from '@vue/test-utils';
import CounterMixins from '../../src/mixins/CounterMixins';

describe('CounterMixins test', () => {
  // Initialize
  const Component = {
    render() {},
    mixins: [CounterMixins],
  };
  const wrapper = shallowMount(Component);
  const { vm } = wrapper;
  describe('data test', () => {
    it('data.count should be 0', () => {
      expect(vm.count).toBe(0);
    });
  });

  describe('method test', () => {
    beforeEach(() => {
      vm.count = 0;
    });

    describe('increment test', () => {
      it('increment once', () => {
        vm.increment();
        expect(vm.count).toBe(1);
      });
    });

    describe('decrement test', () => {
      it('decrement once', () => {
        vm.decrement();
        expect(vm.count).toBe(-1);
      });
    });
  });
});
