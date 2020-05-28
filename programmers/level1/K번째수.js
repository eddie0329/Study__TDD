export const sliceArray = (array, start, end) => {
  return array.slice(start, end);
};
export const sortArray = (array) => {};
export function solution(array, commands) {
  const answer = [];
  let start, end, find, temp;
  commands.forEach((command) => {
    command.forEach((direction, index) => {
      if (index === 0) {
        start = direction - 1;
      } else if (index === 1) {
        end = direction;
      } else {
        find = direction - 1;
      }
    });
    temp = sliceArray(array, start, end).sort((a, b) => a - b);
    answer.push(temp[find]);
  });
  return answer;
}
