import { solution, makeArray } from "./핸드폰 번호 가리기";

describe("핸드폰 번호 가리기", () => {
  it("solution test", () => {
    expect(solution("01033334444")).toBe("*******4444");
    expect(solution("027778888")).toBe("*****8888");
  });
  it("makeArray test", () => {
    expect(makeArray(3).length).toBe(3);
    expect(makeArray(4).length).toBe(4);
    expect(makeArray(5).length).toBe(5);
  });
});
