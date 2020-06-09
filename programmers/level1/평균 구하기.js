import { map, filter, reduce, go, curry } from "@/lib/functional-lib.js";

// export const getAverage = (sum, { length }) => {
//   return sum / length;
// };

// export const addAccumulate = (accmulate, current) => {
//   return accmulate + current;
// };

// export function solution(arr) {
//   return getAverage(arr.reduce(addAccumulate), arr);
// }

export function solution(arr) {
  const add = (a, c) => a + c;
  const divide = (num) => num / arr.length;
  return go(arr, reduce(add), divide);
}
