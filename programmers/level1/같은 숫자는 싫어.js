const isNotEqualtoNext = (num, next) => {
  return num !== next;
};

const filterFunction = (num, index, array) => {
  return isNotEqualtoNext(num, array[index + 1]);
};

const makeNoRepeat = (arr) => {
  return arr.filter((num, index, array) => filterFunction(num, index, array));
};

export function solution(arr) {
  return makeNoRepeat(arr);
}
