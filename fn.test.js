const fn = require("./fn");

test("1은 1이야", () => {
  expect(1).toBe(1);
});

// 성공하는 케이스
test("2 더하기 3은 5야!", () => {
  expect(fn.add(2, 3)).toBe(5);
});

//실패하는 케이스
test("3 더하기 3은 5가 아니야!", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test("2 더하기 3은 5야!", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

// test("이름과 나이를 전달받아서 객체를 반환해줘!", () => {
//   expect(fn.makeUser("hailie", 30)).toBe({
//     name: "hailie",
//     age: 30,
//   });
// });

test("이름과 나이를 전달받아서 객체를 반환해줘!", () => {
  expect(fn.makeUser("hailie", 30)).toEqual({
    name: "hailie",
    age: 30,
  });
});
