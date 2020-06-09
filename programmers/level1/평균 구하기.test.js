import { solution, addAccumulate, getAverage } from "./평균 구하기";

describe("평균 구하기 test", () => {
  it("solution test", () => {
    expect(solution([1, 2, 3, 4])).toEqual(2.5);
    expect(solution([5, 5])).toEqual(5);
  });
  // it("addAccumulate Test", () => {
  //   expect(addAccumulate(2, 3)).toBe(5);
  //   expect(addAccumulate(2, 4)).toBe(6);
  //   expect(addAccumulate(3, 4)).toBe(7);
  // });
  // it("getAverage Test", () => {
  //   expect(getAverage(10, [1, 2])).toBe(5);
  //   expect(getAverage(3, [1, 2, 3])).toBe(1);
  //   expect(getAverage(20, [1, 2])).toBe(10);
  // });
});
