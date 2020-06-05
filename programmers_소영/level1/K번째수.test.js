import { solution, sliceArray, sortAsc, pickKth } from "./K번째수"

describe('K번째수 test', () => {
  test('solution test', () => {
    const array = [1, 5, 2, 6, 3, 7, 4];
    const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
    const answer = [5, 6, 3];

    expect(solution(array, commands)).toEqual(answer);
  });

  test('sliceArray test', () => {
    const array = [1, 5, 2, 6, 3, 7, 4];
    expect(sliceArray(array, 2, 5)).toEqual([5, 2, 6, 3]);
    expect(sliceArray(array, 4, 4)).toEqual([6]);
    expect(sliceArray(array, 1, 7)).toEqual([1, 5, 2, 6, 3, 7, 4]);
  });

  test('sortAsc test', () => {
    const array1 = [5, 2, 6, 3];
    const array2 = [6];
    const array3 = [1, 5, 2, 6, 3, 7, 4];
    expect(sortAsc(array1)).toEqual([2, 3, 5, 6]);
    expect(sortAsc(array2)).toEqual([6]);
    expect(sortAsc(array3)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('pickKth test', () => {
    const array1 = [2, 3, 5, 6];
    const array2 = [6];
    const array3 = [1, 2, 3, 4, 5, 6, 7];
    expect(pickKth(array1, 3)).toEqual(5);
    expect(pickKth(array2, 1)).toEqual(6);
    expect(pickKth(array3, 3)).toEqual(3);
  });
})