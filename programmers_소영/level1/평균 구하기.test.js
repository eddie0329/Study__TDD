import { solution } from './평균 구하기'

describe('평균 구하기 test', () => {
  test('solution test case 1', () => {
    const arr = [1, 2, 3, 4];
    expect(solution(arr)).toBe(2.5);
  });
  test('solution test case 2', () => {
    const arr = [5,5];
    expect(solution(arr)).toBe(5);
  });
})