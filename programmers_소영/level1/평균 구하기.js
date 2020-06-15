export function solution(arr) {
  const size = arr.length;
    let sum = 0;
    for (let i=0; i<size; i++) {
        sum += arr[i];
    }
    return sum/size;
}