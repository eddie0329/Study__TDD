export const arrTotal = (arr) => {
  return arr.reduce((ac, cu) => ac + cu);
};

export const solution = (arr) => {
  const sum = arrTotal(arr);
  const obj = {
    [sum]: (len) => {
      return sum / len;
    },
  };
  return obj[sum](arr.length);
};
