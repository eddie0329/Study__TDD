/**
 *
 * @param {number} n
 */
export function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i += 1) {
    let sum = i;
    console.log("i", sum);
    for (let j = i + 1; j <= n + 1; j += 1) {
      console.log("j", j);
      console.log("sum", sum);
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
