import { solution } from "./두 정수 사이의 합";

describe("두 정수 사이의 합 test", () => {
  it("test1", () => {
    const test1 = solution(3, 5);
    expect(test1).toEqual(12);
  });
  it("test2", () => {
    const test2 = solution(3, 3);
    expect(test2).toEqual(3);
  });
  it("test3", () => {
    const test3 = solution(5, 3);
    expect(test3).toEqual(12);
  });
});
