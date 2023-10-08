// VARIABLES
let hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let body = document.querySelector('body');
let backgroundColorName = document.querySelector('.background-color');
let flipBtn = document.querySelector('.flip');

flipBtn.addEventListener('click', () => {
    let hex = "#";
    for (let i = 0; i < 6; i++){
        hex += hexadecimal[random()];
    }
    body.style.backgroundColor = hex;
    flipBtn.style.backgroundColor = hex;
    backgroundColorName.innerHTML = `Background Color: ${hex}`;

});

function random(){
    return Math.floor(Math.random() * hexadecimal.length);
}