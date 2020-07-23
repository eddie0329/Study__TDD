import { solution } from "./최솟값 만들기";

describe("최솟값 만들기 test", () => {
  describe("solution test", () => {
    it("solution([1, 4, 2], [5, 4, 4]) -> 29", () => {
      expect(solution([1, 4, 2], [5, 4, 4])).toBe(29);
    });
    it("solution([1, 2], [3, 4]) -> 10", () => {
      expect(solution([1, 2], [3, 4])).toBe(10);
    });
  });
});
