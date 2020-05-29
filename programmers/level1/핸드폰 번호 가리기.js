export const makeArray = (length) => {
  return new Array(length);
};

export function solution(phone_number) {
  const array = makeArray(phone_number.length)
    .fill("*")
    .map((char, index) => {
      if (phone_number.length - 4 <= index && index < phone_number.length) {
        return phone_number[index];
      } else {
        return char;
      }
    });
  return array.join("");
}
