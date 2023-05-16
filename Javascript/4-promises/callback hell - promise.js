

// create pizza with promise
const getCheese = () => {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  const cheese = '🧀'
                  resolve(cheese)
            }, 2000);
      })
}

const getDough = (cheese) => {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  const dough = cheese + '🍩'
                  resolve(dough)
            }, 2000);
      })
}

const getPizza = (dough) => {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  const pizza = dough + '🍕'
                  resolve(pizza)
            }, 2000);
      })
}

getCheese()
      .then((cheese) => {
            console.log("cheese", cheese);
            return getDough(cheese);
      }).then((dough) => {
            console.log("dough", dough);
            return getPizza(dough);
      }).then((pizza) => {
            console.log('pizza', pizza);
      }).catch((data) => {
            console.log("error", data);
      })

