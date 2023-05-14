
// method 1 callback function
const a = 10;
const b = 20;

const calculate = (a, b, sumCallback) => {
      return sumCallback(a, b);
}

const sumCallback = (a, b) => {
      return a + b;
}

let res = calculate(a,b,sumCallback);
console.log(res);

// method 2 callback function

const squares = (a,squareCallback) => {
      return squareCallback(a);
}

let x = 2

let result = squares(x,() => {
      return x*x 
})

console.log(result);