import { solution } from "./least-common-number";

describe("least-common-number test", () => {
  describe("solution test", () => {
    it("[2, 6, 8, 14] -> 168", () => {
      expect(solution([2, 6, 8, 14])).toBe(168);
    });
    it("[1, 2, 3] -> 6", () => {
      expect(solution([1, 2, 3])).toBe(6);
    });
  });
});
