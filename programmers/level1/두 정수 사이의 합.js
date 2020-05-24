export const getMin = (num1, num2) => {
  return Math.min(num1, num2);
};

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
  return makeNewArray(getMin(a, b), getMax(a, b)).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
