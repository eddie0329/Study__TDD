import { solution } from "./완주하지 못한 선수";

test("완주하지 못한 선수 test", () => {
  const test1 = solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
  expect(test1).toEqual("leo");
  const test2 = solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  );
  expect(test2).toEqual("vinko");
  const test3 = solution(
    ["mislav", "stanko", "mislav", "ana"],
    ["stanko", "ana", "mislav"]
  );
  expect(test3).toEqual("mislav");
});
