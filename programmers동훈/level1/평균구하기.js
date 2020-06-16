export const solution = (arr) => {
  return arr.reduce((ac, cu) => ac + cu) / arr.length;
};
