// get all the atributes in html
let winner = document.querySelector('.winner');
let card = document.querySelector('.card');
let sum = document.querySelector('.sum');
// button atributes
let start = document.querySelector('.start');
let newcard = document.querySelector('.new-card');
// get the button when its click
start.addEventListener('click', () => {
    startFunction();
});
newcard.addEventListener('click', () => {
    newcardFuntion()
});
// inner function and variables
let cards = [];
let sumation;
let isAlive = false;
function random(){
    return Math.floor(Math.random() * 13) + 1;
}
function startFunction(){
    cards[0] = random();
    cards[1] = random();
    sumation = cards[0] + cards[1];
    display();
    gameLogics(sumation);
}
function newcardFuntion(){
    if(isAlive){
        let newcards = random();
        sumation += newcards;
        display();
        gameLogics();
    }
}
function gameLogics(){
    if(sumation == 21){
        winner.innerHTML = "You Win";
        isAlive = false;
    }else if(sumation > 21){
        winner.innerHTML = "You Loss";
        isAlive = false;
    }else{
        winner.innerHTML = "Do you want to drew a new Card?";
        isAlive = true;
    }
}
function display(){
    card.innerHTML = `Card: ${cards[0]}  ${cards[1]}`;
    sum.innerHTML = `Sum: ${sumation}`;
}