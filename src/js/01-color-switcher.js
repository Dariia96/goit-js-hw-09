const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


startButton.addEventListener("click", changeColor);


function changeColor() {
    startButton.disabled = true;
    stopButton.disabled = false;
        timerId = setInterval(() => {
        const color = getRandomHexColor();
            body.style.backgroundColor = color;

        }, 1000);
};

stopButton.addEventListener("click", () => {
    clearInterval(timerId);
    startButton.disabled = false;
    stopButton.disabled = true;
});