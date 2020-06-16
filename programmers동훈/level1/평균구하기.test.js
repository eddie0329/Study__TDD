import { solution } from "./평균구하기";

const array1 = [1, 2, 3, 4];
const array2 = [5, 5];
const array3 = [4, 5, 6, 7, 8];
const array4 = [1];

describe("평균구하기 테스트", () => {
  it("평균구하기", () => {
    expect(solution(array1)).toEqual(2.5);
    expect(solution(array2)).toEqual(5);
    expect(solution(array3)).toEqual(6);
    expect(solution(array4)).toEqual(1);
  });
});
