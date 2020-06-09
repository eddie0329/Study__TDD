const isZeroOrOne = (n) => {
  return n === 0 || n === 1;
};

const findFibNumber = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push((arr[0] + arr[1]) % 1234567);
    arr.shift();
  }
  return arr.pop();
};

export function solution(n) {
  if (isZeroOrOne(n)) {
    return n;
  }
  return findFibNumber(n);
}
