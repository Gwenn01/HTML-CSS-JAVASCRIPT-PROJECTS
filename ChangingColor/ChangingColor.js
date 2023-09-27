// variables
let main = document.querySelector('.main');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let blue = document.querySelector('.blue');

red.addEventListener('click', () =>{
    main.style.backgroundColor = 'red';
})
yellow.addEventListener('click', () =>{
    main.style.backgroundColor = 'yellow';
})
blue.addEventListener('click', () => {
    main.style.backgroundColor = 'blue';
})