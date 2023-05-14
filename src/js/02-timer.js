import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputdate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;

const daysValue = document.querySelector("[data-days]");
const hoursValue = document.querySelector("[data-hours]");
const minutesValue = document.querySelector("[data-minutes]");
const secondsValue = document.querySelector("[data-seconds]");
const value = document.querySelector(".value");

const currentDateInMs = Date.now(); 
let timerId = null;



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const targetDate = selectedDates[0];
        const targetDateInMs = targetDate.getTime();
        
        if (targetDate <= currentDateInMs) {
            window.alert("Please choose a date in the future");
        }
        else {
            startBtn.disabled = false;
            startBtn.addEventListener("click", function () {
                timerId = setInterval(() => {
                    const currentDateInMs = Date.now(); 
                    const distanceToTargetDate = targetDateInMs - currentDateInMs;
                    
                    convertMs(distanceToTargetDate);
                    if (distanceToTargetDate === 0) {
                    
                    clearInterval(timerId)
                }
                }, 1000);
         
                
            });
            

        };
    
    console.log(selectedDates[0]);
},
};






flatpickr(inputdate, options);

function convertMs(ms) {
    
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

   
    daysValue.innerText = `${days}`;
    hoursValue.innerText = `${hours }`;
    minutesValue.innerText = `${minutes}`;
    secondsValue.innerText = `${seconds}`;
     addLeadingZero();
    

    return { days, hours, minutes, seconds };
    
}

function addLeadingZero() {

    value.toString().padStart(2, "0");
   
};
