const fn = {
  add: (num1, num2) => num1 + num2,
  //객체를 만들어주는 함수
  makeUser: (name, age) => ({ name, age }),
};

module.exports = fn;
// package file에서 사용할 수 있도록 export 해준다.
