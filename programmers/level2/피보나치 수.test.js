import { solution } from "./피보나치 수";

describe("test fib", () => {
  it("solution test", () => {
    expect(solution(2)).toBe(1);
    expect(solution(3)).toBe(2);
    expect(solution(5)).toBe(5);
  });
});
