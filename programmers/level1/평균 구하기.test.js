import { solution } from "./평균 구하기";

describe("평균 구하기 test", () => {
  it("solution test", () => {
    expect(solution([1, 2, 3, 4])).toEqual(2.5);
    expect(solution([5, 5])).toEqual(5);
  });
});
