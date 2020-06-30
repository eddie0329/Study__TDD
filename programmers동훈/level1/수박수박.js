export const solution = (n) => {
  const arrayWaterMelon = [];

  for (let i = 1; i <= n; i++) {
    let isWaterMelon = i % 2 !== 0 ? "수" : "박";
    arrayWaterMelon.push(isWaterMelon);
  }

  return arrayWaterMelon.reduce((a, c) => a + c);
};
