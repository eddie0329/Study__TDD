import { solution } from "./nextBigNum";

describe("다음 큰 숫자 test", () => {
  describe("solution test", () => {
    it("78 -> 83", () => {
      expect(solution(78)).toBe(83);
    });
    it("15 -> 23", () => {
      expect(solution(15)).toBe(23);
    });
  });
});
