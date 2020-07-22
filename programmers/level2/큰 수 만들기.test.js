import { solution } from "./큰 수 만들기";

describe("큰 수 만들기 test", () => {
  describe("solution test", () => {
    it('solution("1924", 2) -> 94', () => {
      expect(solution("1924", 2)).toBe("3234");
    });
    it('solution("1231234", 3) -> 3234', () => {
      expect(solution("1231234", 3)).toBe("3234");
    });
    it('solution("4177252841", 4) -> 775841', () => {
      expect(solution("4177252841"), 4).toBe("775841");
    });
  });
});
