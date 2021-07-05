export function solution(arr) {
  return devide(sum(arr), getSize(arr));
}

export function getSize(arr) {
  return arr.length;
}

export function sum(iter) {
  let sum = 0;
  for (const a of iter) {
    sum += a;
  }
  return sum;
}

export function devide(a, b) {
  return a / b;
}
