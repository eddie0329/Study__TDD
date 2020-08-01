import { solution, getLCN } from "./least-common-number";

describe("least-common-number test", () => {
  describe("getLCN test", () => {
    it("2, 6 -> 3", () => {
      expect(getLCN(6, 2)).toBe(3);
    });
    it("2, 14 -> 7", () => {
      expect(getLCN(14, 2)).toBe(7);
    });
    it("2, 3 -> 6", () => {
      expect(getLCN(3, 2)).toBe(6);
    });
  });

  // describe("solution test", () => {
  //   it("[2, 6, 8, 14] -> 168", () => {
  //     expect(solution([2, 6, 8, 14])).toBe(168);
  //   });
  //   it("[1, 2, 3] -> 6", () => {
  //     expect(solution([1, 2, 3])).toBe(6);
  //   });
  // });
});
