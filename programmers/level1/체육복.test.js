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
    it('test4', () => {
      expect(3, [1, 3], [1, 2]).toBe(3);
    });
    it('test5', () => {
      expect(4, [1], [1]).toBe(4);
    });
    it('test6', () => {
      expect(5, [2, 3, 4], [3, 4, 5]).toBe(5);
    });
    it('test7', () => {
      expect(10, [3, 9, 10], [3, 8, 9]).toBe(10);
    })
    it('test8', () => {
      expect(5, [3, 4], [4, 5]).toBe(4);
    })
  });
});