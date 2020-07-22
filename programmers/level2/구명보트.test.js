import { solution } from "./구명보트";

describe("구명보트 test", () => {
  describe("solution test", () => {
    it("solution([70, 50, 80, 50], 100) -> 3", () => {
      expect(solution([70, 80, 50, 50])).toBe(3);
    });
    it("solution([70, 80, 50], 100) -> 3", () => {
      expect(solution([70, 80, 50])).toBe(3);
    });
  });
});
