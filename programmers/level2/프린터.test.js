import { solution } from "./프린터";

describe("printer test", () => {
  it("solution test1", () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
  });
  it("solution test2", () => {
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
  });
});
