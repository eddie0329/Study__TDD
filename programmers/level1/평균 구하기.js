export const getAverage = (sum, { length }) => {
  return sum / length;
};

export const addAccumulate = (accmulate, current) => {
  return accmulate + current;
};

export function solution(arr) {
  return arr.reduce(addAccumulate) / arr.length;
}
