/**
 *
 * @param {array} A
 * @param {array} B
 */
export function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  B.reverse();
  A.forEach((num, index) => {
    const sum = num * B[index];
    answer += sum;
  });
  return answer;
}
