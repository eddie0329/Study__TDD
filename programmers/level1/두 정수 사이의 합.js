export function solution(a, b) {
  const array = Array.of(a, b).sort((a, b) => a - b);
  const newArray = [];
  for (let i = array[0]; i <= array[1]; i++) {
    newArray.push(i);
  }
  return newArray.reduce((a, c) => a + c);
}
