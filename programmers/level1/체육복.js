/**
 * 
 * @param {number} num 
 */
export const isMinusOne = (num) => num === -1;

/**
 * 
 * @param {number} n 
 * @param {array} lost 
 * @param {array} reserve 
 */
export const solution = (n, lost, reserve) => {
  const filteredLost = lost.filter(l => {
    const findIdentical = reserve.findIndex(r => r === l);
    if (isMinusOne(findIdentical)) {
      return true;
    } else {
      reserve.splice(findIdentical, 1);
      return false
    }
  });
  filteredLost.forEach((l) => {
    const findBorrowBelow = reserve.findIndex(r => r === l - 1);
    if (isMinusOne(findBorrowBelow)) {
      const findBorrowUpper = reserve.findIndex(r => r === l + 1);
      if (isMinusOne(findBorrowUpper)) {
        n -= 1;
      } else {
        reserve.splice(findBorrowUpper, 1);
      }
    } else {
      reserve.splice(findBorrowBelow, 1);
    }
  });
  return n;
}