import { map } from "./functional-lib";

describe("funtional lib test", () => {
  it("map test", () => {
    const add2 = (num) => num + 2;
    expect(map(add2, [1, 2, 3])).toEqual([3, 4, 5]);
    const double = (num) => num * 2;
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6]);
    const triple = (num) => num * 3;
    expect(map(triple, [1, 2, 3])).toEqual([3, 6, 9]);
  });
});
