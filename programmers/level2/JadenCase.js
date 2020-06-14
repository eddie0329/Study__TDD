import { map, filter, reduce, go, curry, pipe } from "@/lib/functional-lib.js";

// export function solution(s) {
//   const stringArray = s.split(" ");
//   const newArray = stringArray.map((word, index) => {
//     if (word === "") {
//       return "";
//     }
//     const newWord = word[0].toUpperCase() + word.toLowerCase().slice(1);
//     return newWord;
//   });
//   return newArray.join(" ");
// }

const FIRST_LETTER = 0;

const convertLowerCase = (str) => {
  return str.toLowerCase();
};

const convertUpperCase = (str) => {
  return str.toUpperCase();
};

const converStringToArrayWithSpace = (str) => {
  return str.split(" ");
};

const isStringBlank = (str) => {
  return str === "";
};

const concatStrings = (str1, str2) => {
  return str1.concat(str2);
};

const convertFirstCharUpperCase = (str) => {
  if (isStringBlank(str)) {
    return str;
  }
  return concatStrings(convertUpperCase(str[FIRST_LETTER]), str.slice(1));
};

const joinArrayToStringWithSpace = (arr) => {
  return arr.join(" ");
};

export function solution(str) {
  return go(
    str,
    convertLowerCase,
    converStringToArrayWithSpace,
    map(convertFirstCharUpperCase),
    joinArrayToStringWithSpace
  );
}
