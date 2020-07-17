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
    console.log();
    const indexNext = index + 1;
    const sumMinus = sum - number[indexNext];
    const sumPlus = sum + number[indexNext];
    solution(number, target, sumMinus, indexNext);
    solution(number, target, sumPlus, indexNext);
  }
  console.log("index", index);
  console.log("sum", sum);
  console.log("answer", answer);
  console.log();
  return answer;
};

solution([1, 1, 1], 3);
