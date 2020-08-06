/**
 * 
 * @param {number} n 
 * @param {array} lost 
 * @param {array} reserve 
 */
export const solution = (n, lost, reserve) => {
  lost.forEach((l) => {
    const findMine = reserve.findIndex(r => r === l);
    if (findMine !== -1) {
      console.log(l);
      reserve.splice(findMine, 1);
    }
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