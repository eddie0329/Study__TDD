export const getMin = (num1, num2) => {};

export const getMax = (num1, num2) => {
  return Math.max(num1, num2);
};

export const makeNewArray = (start, end) => {
  const newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};

export function solution(a, b) {
  const array = Array.of(a, b).sort((a, b) => a - b);
  return makeNewArray(array[0], array[1]).reduce((a, c) => a + c);
}
