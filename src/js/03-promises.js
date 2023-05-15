
const form = document.querySelector(".form");
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('[type="submit"]');
const amount = amountInput.value;
const delayValue = delayInput.value;


function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  const promiseFirst = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
            } else {
    reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
  }
        }, delay)
    })
}



submitBtn.addEventListener("click", function () {
  createPromise(1, delayValue);
  for (let i = 1; i < amountInput.value; i++) {
    delay = delay + stepInput.value;
    i = position;
    promiseFirst
    
    
         
      .then(({ position, delay }) => {
        setTimeout(() => {
          if (shouldResolve) {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
                
          }
        }, delay)
   
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      })
  }
  })


//for (let i = 3; i > 0; i--) {
// const delay = i * 1000;
//console.log('DELAY: ' + delay);
//console.log('i: ' + i);
//setTimeout(() => console.log(i), delay);
//}
 //for (let promise = 1; promise <= amount; promise++) {
 //const delay = promise * 1000;
//console.log('DELAY: ' + delay);
//console.log('i: ' + i);
//setTimeout(() => console.log(), delay);
//}