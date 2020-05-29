import { solution } from "./핸드폰 번호 가리기";

describe("핸드폰 번호 가리기", () => {
  it("solution test", () => {
    expect(solution("01033334444")).toBe("*******4444");
    expect(solution("027778888")).toBe("*****8888");
  });
});
