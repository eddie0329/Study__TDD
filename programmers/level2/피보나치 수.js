export function solution(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  const arr = new Array(n + 1);
  arr.splice(0, 1, 0);
  arr.splice(1, 1, 1);

  for (let i = 2; i < arr.length; i++) {
    const result = arr[i - 1] + arr[i - 2];
    arr.splice(i, 1, result);
  }
  return arr[n];
}
