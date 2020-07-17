/**
 *
 * @param {array} number
 * @param {number} target
 */
export const solution = (number, target, sum = 0, index = -1, answer = 0) => {
  if (sum === target) {
    answer += 1;
  }
  if (number.length - 1 > index) {
    console.log("index", index);
    console.log("sum", sum);
    console.log("answer", answer);
    const indexNext = index + 1;
    solution(number, target, (sum -= number[indexNext]), indexNext);
    solution(number, target, (sum += number[indexNext]), indexNext);
  }
  return answer;
};
