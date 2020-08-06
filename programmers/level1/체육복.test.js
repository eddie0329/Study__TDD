import { solution } from "./체육복";

describe("체육복 test", () => {
  describe("solution test", () => {
    it("test1", () => {
      expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
    });
    it("test2", () => {
      expect(solution(5, [2, 4], [3])).toBe(4);
    });
    it("test3", () => {
      expect(solution(3, [3], [1])).toBe(2);
    });
  });
});
