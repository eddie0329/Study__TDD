export function solution(s) {
  const stringArray = s.split(" ");
  const newArray = stringArray.map((word, index) => {
    if (word === "") {
      return "";
    }
    const newWord = word[0].toUpperCase() + word.toLowerCase().slice(1);
    return newWord;
  });
  return newArray.join(" ");
}
