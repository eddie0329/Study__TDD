export const getAverage = (sum, { length }) => {
  return sum / length;
};

export const addAccumulate = (accmulate, current) => {
  return accmulate + current;
};

export function solution(arr) {
  return getAverage(arr.reduce(addAccumulate), arr);
}
