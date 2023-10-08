// VARIBLES 
let value = 0;
let btnDecrease = document.getElementById('decrease');
let btnReset = document.getElementById('reset');
let btnIncrease = document.getElementById('increase');

// functionality
btnDecrease.addEventListener('click', () => {
    value -= 1;
    changingTheColorOfValue(value);
});
btnReset.addEventListener('click', () => {
    value = 0;
    changingTheColorOfValue(value);
});
btnIncrease.addEventListener('click', () => {
    value += 1;
    changingTheColorOfValue(value);
});

function changingTheColorOfValue(value){
    let counterValue = document.querySelector('.counter-value');
    counterValue.innerHTML = `${value}`;
    if (value == 0){
        counterValue.style.color = "black";
    }else if(value < 0){
        counterValue.style.color = "red";
    }else if(value > 0){
        counterValue.style.color = "green";
    }
}