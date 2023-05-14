

// const a = 10;
// const b = 20;
// const c = 30;
// let res = add(a,b,c);
// console.log(res);  // Cannot access 'add' before initialization

// arrow function expression
const add = (a,b,c) => {
      return a+b+c;
}

// it is also a arrow function expresssion
const square = (a) => a*a

const a = 10;
const b = 20;
const c = 30;
let res = add(a,b,c);
console.log(res);//60
let result = square(a);
console.log(result);//100