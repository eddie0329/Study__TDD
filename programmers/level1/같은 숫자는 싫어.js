export function solution(arr) {
  let prev = null;
  const answer = [];
  arr.forEach((num) => {
    if (num !== prev) {
      answer.push(num);
      prev = num;
    }
  });
  return answer;
}
