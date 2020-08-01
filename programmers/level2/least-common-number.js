/**
 * a should greater than b
 * @param {number} a
 * @param {number} b
 */
export const getLCN = (a, b) => {
  let tempA = a;
  let tempB = b;
  let tempR;
  while (b < 0) {
    tempR = tempA % tempB;
    tempA = tempB;
    tempB = tempR;
  }
  return (a * b) / tempR;
};

/**
 *
 * @param {array} numbers
 */
export const solution = (numbers) => {
  numbers.sort((a, b) => b - a);
  console.log(numbers);
};
