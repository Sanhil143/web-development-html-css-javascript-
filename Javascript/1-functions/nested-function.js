

const a = 2;
const b = 3;
let res = addSquares(a,b)  // 2*2=4 3*3=9 4+9=13
console.log(res); //13


// nested function
function addSquares(a,b){
      function square(x){
            return x*x;
      }
      return square(a) + square(b);
}