import { solution, getSize, sum, devide } from './평균 구하기'

describe('평균 구하기 test', () => {
  test('solution test case 1', () => {
    const arr = [1, 2, 3, 4];
    expect(solution(arr)).toBe(2.5);
  });
  test('solution test case 2', () => {
    const arr = [5,5];
    expect(solution(arr)).toBe(5);
  });

  test('getSize test', () => {
    expect(getSize([1, 2, 3, 4, 5])).toBe(5);
    expect(getSize([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(10);
  });

  test('sum test', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([1, 3, 5, 7, 9])).toBe(25);
  });

  test('devide test', () => {
    expect(devide(10, 5)).toBe(2);
    expect(devide(27, 3)).toBe(9);
  })
})