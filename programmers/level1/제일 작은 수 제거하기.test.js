import { solution } from "./제일 작은 수 제거하기";

describe("제일 작은 수 제거하기", () => {
  it("test solution", () => {
    expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2]);
    expect(solution([10])).toEqual([-1]);
  });
});
