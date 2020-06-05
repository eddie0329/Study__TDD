export function solution(array, commands) {
  return commands.map(([from, to, k]) => pickKth(sortAsc(sliceArray(array, from, to)), k));
}

export function sliceArray(array, from, to) {
  return array.slice(from - 1, to);
}

export function sortAsc(array) {
  return array.sort((a, b) => a - b);
}

export function pickKth(array, k) {
  return array[k - 1];
}