
const form = document.querySelector(".form");
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
          setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay})
            } else {
    reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
  }
        }, delay)
    
}

form.addEventListener("submit", function ( event) {
  event.preventDefault();  
  const amount = amountInput.value;
  const step = stepInput.value;
  const delay = delayInput.value;
  
  for (let position = 0; position < amount; position++) {
  
    createPromise(position, delay)
    
    .then(({ position, delay }) => {
        delay = delay + step;
          if (shouldResolve) {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
          }
      })
      .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
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