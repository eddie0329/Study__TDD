import { solution } from "./수박수박";

describe("수박수박 테스트", () => {
  it("수박수박", () => {
    expect(solution(3)).toEqual("수박수");
    expect(solution(4)).toEqual("수박수박");
    expect(solution(1)).toEqual("수");
  });
});
