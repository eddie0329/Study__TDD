import { solution } from "./같은 숫자는 싫어";

decribe("같은 숫자는 싫어 테스트", () => {
  it("테스트1", () => {
    const test1 = solution([1, 1, 3, 3, 0, 1, 1]);
    expect(test1).toEqual([1, 3, 0, 1]);
  });
  it("테스트2", () => {
    const test2 = solution([4, 4, 4, 3, 3]);
    expect(test2).toEqual([4, 3]);
  });
});
