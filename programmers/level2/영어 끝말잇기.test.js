import { solution } from "./영어 끝말잇기";

describe("영어 끝말잇기 test", () => {
  it("solution test", () => {
    expect(
      solution([
        "tank",
        "kick",
        "know",
        "wheel",
        "land",
        "dream",
        "mother",
        "robot",
        "tank",
      ])
    ).toEqual([3, 3]);

    expect([
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ]).toEqual([0, 0]);

    expect(["hello", "one", "even", "never", "now", "world", "draw"]).toEqual([
      1,
      3,
    ]);
  });
});
