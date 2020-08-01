/**
 * a should greater than b
 * @param {number} a
 * @param {number} b
 */
export const getLCN = (a, b) => {
  let tempA = a;
  let tempB = b;
  let tempR;
  tempR = tempA % tempB;
  tempA = tempB;
  tempB = tempR;
  console.log(tempR);
  return (a * b) / tempR;
};

/**
 *
 * @param {array} numbers
 */
export const solution = (numbers) => {
  // numbers.sort((a, b) => b - a);
};
