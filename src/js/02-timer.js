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

startBtn.disabled = false;
    inputdate.disabled = false;
let timerId = null;
 const currentDateInMs = Date.now(); 


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const targetDate = selectedDates[0];
              
        if (targetDate <= currentDateInMs) {
            window.alert("Please choose a date in the future");
        }
        else {
            startBtn.disabled = false;
        };
        
    console.log(selectedDates[0]);
},
};

function countingToTargetDate() {
    startBtn.disabled = true;
    inputdate.disabled = true;
                timerId = setInterval(() => {
                    const targetDateInMs = new Date(inputdate.value);
                    const distanceToTargetDate = targetDateInMs - Date.now(); 
                    
                    const time = convertMs(distanceToTargetDate);
                    updateClock (time);
                    if (distanceToTargetDate <= 1000) {
                    
                    clearInterval(timerId)
                }
                }, 1000);    
            }

startBtn.addEventListener("click", countingToTargetDate );


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

function addLeadingZero(value) {

    return String(value).padStart(2, "0");
   
};

function updateClock({ days, hours, minutes, seconds }) {
    daysValue.textContent = addLeadingZero(days);
    hoursValue.innerText = addLeadingZero(hours);
    minutesValue.innerText = addLeadingZero(minutes);
    secondsValue.innerText = addLeadingZero(seconds);
}