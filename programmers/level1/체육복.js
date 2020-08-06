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
      return false;
    } else {
      console.log('i', findIdentical);
      reserve.splice(findIdentical, 1);
      // console.log('l', l);
      // console.log('index', findIdentical);
      // console.log('lost', lost);
      // console.log('reserve', reserve);
      return true;
    }
  });
  console.log(filteredLost);
  console.log(reserve);
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