import { solution, sliceArray } from "./K번째수";

describe("K번째수 test", () => {
  it("solution test", () => {
    const array = [1, 5, 2, 6, 3, 7, 4];
    const commands = [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ];
    const answer = [5, 6, 3];

    expect(solution(array, commands)).toEqual(answer);
  });

  it("sliceArray test", () => {
    expect(sliceArray([1, 2, 3], 0, 1)).toEqual([1]);
    expect(sliceArray([1, 2, 3], 0, 2)).toEqual([1, 2]);
    expect(sliceArray([1, 2, 3], 1, 2)).toEqual([2]);
    expect(sliceArray([1, 2, 3], 2, 3)).toEqual([3]);
  });
});
