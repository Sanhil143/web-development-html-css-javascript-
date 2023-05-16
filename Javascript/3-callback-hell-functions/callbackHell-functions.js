// let create Pizza with callback hell ----->


const getCheese = (callBack) => {
      setTimeout(() => {
            const cheese = '🧀';
            callBack(cheese)
      }, 2000)
}
const getDough = (cheese, callBack) => {
      setTimeout(() => {
            const dough = cheese + '🍩'
            callBack(dough)
      },2000);
}
const getPizza = (dough,callBack) => {
      setTimeout(()=>{
            const pizza =  dough + '🍕'
            callBack(pizza)
      },2000);
}

getCheese((cheese) => {
      console.log('cheese is here', cheese);
      getDough(cheese,(dough) => {
            console.log('dough is here with cheese',dough);
            getPizza(dough,(pizza) => {
                  console.log('finally pizza is ready',pizza);
            });
      });
});
