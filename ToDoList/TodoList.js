// get the value of html inputs and display
let inputList = document.querySelector('.inputList');
let inputDate = document.querySelector('.inputDate');
let displayList = document.querySelector('.displayList');
let displayDate = document.querySelector('.displayDate');
// Storing the inputs
const LIST = []
const DATE = []
// create a function for bottun, that can add the list
function addBtn(){
    // add the value of what user input in the text and date inputs tags, then call it in the button add
    LIST.push(inputList.value);
    DATE.push(inputDate.value);
    // then reset the inpust
    inputList.value = "";
    inputDate.value = "";
    // call the funtion
    generateDisplay();
}
// generate display, so that we can display the output in inner html
function generateDisplay(){
    // hold the value to display all
    let holdValue = '';
    // create a p and button in every list
    for(let i = 0; i < LIST.length; i++){
        let generate = `<p class="displayList">
                        ${LIST[i]} 
                        </p>
                        <p class="displayDate">
                        ${DATE[i]}
                        </p>
                        <button class="deleteBtn" onclick="deleteValue(${i})">DELETE</button>
                        </br></br>`;
        holdValue += generate;
    }
    // display it all in innerHtml using out container div
    document.querySelector('.generateDisplay').innerHTML = holdValue;
   
}
// create a function that display all the list and date, that have been added
function deleteValue(i){
    LIST.splice(i, 1)
    DATE.splice(i, 1)
    generateDisplay()
}

