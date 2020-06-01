import { map, filter, reduce } from "./functional-lib";

describe("funtional lib test", () => {
  it("map test", () => {
    const add2 = (num) => num + 2;
    expect(map(add2, [1, 2, 3])).toEqual([3, 4, 5]);
    const double = (num) => num * 2;
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
    const triple = (num) => num * 3;
    expect(map(triple, [1, 2, 3])).toEqual([3, 6, 9]);
  });

  it("filter test", () => {
    const getOdd = (num) => num % 2;
    expect(filter(getOdd, [1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    const getEven = (num) => !(num % 2);
    expect(filter(getEven, [1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("reduce test", () => {
    const add = (a, b) => a + b;
    expect(reduce(add, 0, [1, 2, 3, 4])).toBe(10);
    expect(reduce(add, [1, 2, 3, 4])).toBe(10);
  });
});
