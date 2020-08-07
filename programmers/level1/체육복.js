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
    if (findIdentical !== -1) {
      reserve.splice(findIdentical, 1);
      return false;
    } else {
      return true;
    }
  });
  filteredLost.forEach((l) => {
    const findBorrowBelow = reserve.findIndex(r => r === l - 1);
    if (findBorrowBelow === -1) {
      const findBorrowUpper = reserve.findIndex(r => r === l + 1);
      if (findBorrowUpper === -1) {
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