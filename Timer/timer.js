// variables
let intervalId;

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = document.querySelector('.timer');
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let clear = document.querySelector('.clear');

let isStart = false;
// functionality
//EVENT THE BUTTON//
start.addEventListener('click', () => {
    if (!isStart){
        intervalId = setInterval(timerUps, 1000);
        isStart = true;
    }
});
pause.addEventListener('click', () => {
    clearInterval(intervalId);
    isStart = false;
});
clear.addEventListener('click', () => {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    isStart = false;
    display();
});

//FUNCTIONS//
function timerUps(){
    seconds += 1;
    if (seconds == 60){
        seconds = 0;
        minutes += 1;
        if (minutes == 60){
            minutes = 0;
            hours += 1;
            if (hours == 60){
                hours = 0;
            }
        }
    }
    display();
};
function display(){
    let tempSeconds = seconds;
    let tempMinutes = minutes;
    let tempHours = hours;
    if (tempSeconds < 10){
        tempSeconds = 0 + "" + tempSeconds;
    }
    if (tempMinutes < 10){
        tempMinutes = 0 + ""+ tempMinutes;
    }
    if (tempHours < 10){
        tempHours = 0 + ""+ tempHours;
    }
    // the dispaly it
    timer.innerHTML = `${tempHours}:${tempMinutes}:${tempSeconds}`;
};
