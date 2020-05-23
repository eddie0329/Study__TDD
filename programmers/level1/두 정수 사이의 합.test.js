import { solution, makeNewArray, compareTwoNum } from "./두 정수 사이의 합";

describe("두 정수 사이의 합 test", () => {
  it("test solution", () => {
    const test1 = solution(3, 5);
    const test2 = solution(3, 3);
    const test3 = solution(5, 3);
    expect(test1).toEqual(12);
    expect(test2).toEqual(3);
    expect(test3).toEqual(12);
  });
  it("test makeNewArray", () => {
    const test1 = makeNewArray(3, 5);
    expect(test1).toEqual([3, 4, 5]);
    const test2 = makeNewArray(3, 3);
    expect(test2).toEqual([3]);
    const test3 = makeNewArray(1, 5);
    expect(test3).toEqual([1, 2, 3, 4, 5]);
  });
  it("test compareTwoNum", () => {
    expect(compareTwoNum(3, 5)).toEqual(3, 5);
    expect(compareTwoNum(3, 3)).toEqual(3, 3);
    expect(compareTwoNum(5, 3)).toEqual(3, 5);
  });
});
