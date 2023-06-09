
const form = document.querySelector(".form");
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {const shouldResolve = Math.random() > 0.3;
          setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay})
            } else {
    reject({ position, delay});
  }
        }, delay)})
  
    
}
function createPromisesChain (event) {
  event.preventDefault();  
  const amount = amountInput.value;
  const step = stepInput.value;
  if (amount <= 0 | step < 0 | delayInput.value < 0) {
   window.alert(`Please fill up the form correctly`)
  } 
  
  for (let position = 1; position <= amount; position++) {
  let delay = Number(delayInput.value) + Number((position - 1 ) * step) ;
    createPromise(position, delay)
    
    .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
          
      })
      .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
  }
}
  
form.addEventListener("submit", createPromisesChain)


