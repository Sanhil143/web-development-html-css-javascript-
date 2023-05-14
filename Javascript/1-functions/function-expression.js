

const b = 3;
let result = square(b);
console.log(result);  // Cannot access 'square' before initialization


//function expression  --> hoisting not supported
const square = function(a){
      return a*a
}

const a = 5;
let res = square(a);
console.log(res);