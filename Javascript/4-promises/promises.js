
//normal syntax of promise
const ticket = new Promise((resolve, reject) => {
      const isBooked = true;
      if (isBooked) {
            resolve('Ticket is booked');
      } else {
            reject('Ticket is cancelled');
      }
})

ticket
      .then((data) => {
            console.log("wohoo", data);
      }).catch((data) => {
            console.log("oops", data);
      })

