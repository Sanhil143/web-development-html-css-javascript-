
// create pizza with promise
const getCheese = () => {
      return new Promise((resolve,reject) => {
            setTimeout(() => {
                  const cheese = '🧀'
                  resolve(cheese)
            },2000);
      })
}

const getDough = (cheese) => {
      return new Promise((resolve,reject) => {
            setTimeout(() => {
                  const dough = cheese + '🍩'
                  resolve(dough)
            },2000);
      })
}

const getPizza = (dough) => {
      return new Promise((resolve, reject) => {
            setTimeout(()=>{
                  const pizza = dough + '🍕'
                  resolve(pizza)
            },2000);
      })
}
// use async await
const orderPizza = async () => {
      try{
            const cheese = await getCheese()
            console.log('here is the cheese',cheese);
            const dough = await getDough(cheese);
            console.log('here is the dough',dough);
            const pizza = await getPizza(dough);
            console.log('here is the pizza',pizza);
      }catch(err){
            console.log('error occur',err);
      }
}

orderPizza()