const NOT_FOUND = -1;

/**
 *
 * @param {number} num
 */
export const isNotFound = (index) => index === NOT_FOUND;

/**
 *
 * @param {array} lost
 * @param {array} reserve
 */
export const filterIdentical = (lost, reserve) => {
  const filteredLost = lost.filter((l) => {
    const findIdentical = reserve.findIndex((r) => r === l);
    if (isNotFound(findIdentical)) {
      return true;
    } else {
      reserve.splice(findIdentical, 1);
      return false;
    }
  });
  return { filteredLost, filteredReserve: reserve };
};

/**
 *
 * @param {number} n
 * @param {array} lost
 * @param {array} reserve
 */
export const solution = (n, lost, reserve) => {
  const { filteredLost, filteredReserve } = filterIdentical(lost, reserve);
  filteredLost.forEach((l) => {
    const findBorrowBelow = filteredReserve.findIndex((r) => r === l - 1);
    if (isNotFound(findBorrowBelow)) {
      const findBorrowUpper = filteredReserve.findIndex((r) => r === l + 1);
      if (isNotFound(findBorrowUpper)) {
        n -= 1;
      } else {
        filteredReserve.splice(findBorrowUpper, 1);
      }
    } else {
      filteredReserve.splice(findBorrowBelow, 1);
    }
  });
  return n;
};
