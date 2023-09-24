// variables
let openButton = document.querySelector('.open-modal');
let modalContainer = document.querySelector('.modal-container');
let closeButton = document.querySelector('.close-btn')

openButton.addEventListener('click', () =>{
    modalContainer.style.display = 'block';
});
closeButton.addEventListener('click', () =>{
    modalContainer.style.display = 'none';
})

