import { solution } from "./K번째수"

describe('K번째수 test', () => {
  test('solution test', () => {
    const array = [1, 5, 2, 6, 3, 7, 4];
    const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
    const answer = [5, 6, 3];

    expect(solution(array, commands)).toEqual(answer);
  });
})