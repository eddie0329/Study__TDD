/**
 *
 * @param {number} n
 */
export function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i += 1) {
    let sum = i;
    for (let j = i + 1; j <= n + 1; j += 1) {
      if (sum === n) {
        answer += 1;
        break;
      }
      if (sum < n) {
        sum += j;
      }
      if (sum > n) {
        break;
      }
    }
  }
  return answer;
}
