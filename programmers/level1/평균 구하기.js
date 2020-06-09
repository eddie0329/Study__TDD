import { map, filter, reduce, go, curry, pipe } from "@/lib/functional-lib.js";

// export const getAverage = (sum, { length }) => {
//   return sum / length;
// };

// export const addAccumulate = (accmulate, current) => {
//   return accmulate + current;
// };

// export function solution(arr) {
//   return getAverage(arr.reduce(addAccumulate), arr);
// }

const add = (accmulate, current) => accmulate + current;
const addAll = reduce(add);

export function solution(arr) {
  const divideWithLength = (sum) => sum / arr.length;
  return go(arr, addAll, divideWithLength);
}
