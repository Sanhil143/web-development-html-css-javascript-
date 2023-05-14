
const a = 10;
const b = 20;
let res = add(a,b);
console.log(res);

// normal function --support hoisting

function add(a,b){
      return a+b
}

const c = 30;
const d = 20;
let result = add(c,d)
console.log(result);