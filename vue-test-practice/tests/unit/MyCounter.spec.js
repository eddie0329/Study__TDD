import { mount } from "@vue/test-utils";
import MyCounter from "@/components/MyCounter";

describe("MyCounter unit test", () => {
  // mount component
  const wrapper = mount(MyCounter, {
    propsData: {
      testProps: "TEST_PROPS",
    },
  });
  const { vm } = wrapper;

  // testing data
  describe("MYCOUNTER DATA TEST", () => {
    describe("data count test", () => {
      it("count should be 0", () => {
        expect(vm.count).toBe(0);
      });
    });
    describe("data tempText test", () => {
      it("tempText should be HELLO", () => {
        expect(vm.tempText).toBe("HELLO");
      });
    });
  });

  // testing props
  describe("MYCOUNTER PROPS TEST", () => {
    describe("testProps test", () => {
      it('testProps should be "TEST_PROPS', () => {
        expect(vm.testProps).toBe("TEST_PROPS");
      });
    });
  });

  // testing created
  describe("MYCOUNTER CREATED TEST", () => {
    describe("created test", () => {
      it("testCreated data should be changed blank to TEST_CREATED", () => {
        expect(vm.testCreated).toBe("TEST_CREATED");
      });
    });
  });

  // testing methods
  describe("MYCOUNTER METHOD TEST", () => {
    beforeEach(() => {
      vm.count = 0;
    });
    // testing increase method
    describe("onClickIncrease test", () => {
      it("increase by 1", () => {
        vm.onClickIncrease();
        expect(vm.count).toBe(1);
      });
    });

    // testing decrease method
    describe("onClickDecrease test", () => {
      it("decrease by 1", () => {
        vm.onClickDecrease();
        expect(vm.count).toBe(-1);
      });
    });
  });

  // testing computed
  describe("MYCOUNTER COMPUTED TEST", () => {
    it("lowercaseTempText test", () => {
      expect(vm.lowercaseTempText).toBe("hello");
    });
  });
});
