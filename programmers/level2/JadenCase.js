export function solution(s) {
  const stringArray = s.toLowerCase().split(" ");
  const newArray = stringArray.map((word, index) => {
    const newWord = word[0].toUpperCase() + word.slice(1);
    return newWord;
  });
  return newArray.join(" ");
}
