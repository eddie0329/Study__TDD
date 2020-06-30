import { solution } from "./두 정수 사이의 합";

describe("solution test", () => {
  it("test", () => {
    expect(solution(3, 5)).toEqual(12);
    expect(solution(5, 5)).toEqual(5);
    expect(solution(5, 3)).toEqual(12);
  });
});
