// balance and history variable
let balance = 0;
let historyTracker = []
let balanceValue = document.querySelector('.balance-value');
let history = document.querySelector('.history');
// varibles for displaying
let addButton = document.querySelector('.add-btn');
let expenseButton = document.querySelector('.add-expense-btn');
let containerDisplay = document.querySelector('.container-display');
let containerAdding = document.querySelector('.container-adding');
let containerExpense = document.querySelector('.container-expense');
// variables for inputs and button
// for adding money
let inputAddMoney = document.querySelector('#adding-money');
let inputAddDescription = document.querySelector('#adding-description');
let btnAddCancel = document.querySelector('#add-cancel');
let btnAddSubmit = document.querySelector('#add-submit');
// dor expense money
let inputExpenseMoney = document.querySelector('#expense-money');
let inputExpenseDescription = document.querySelector('#expense-description');
let btnExpenseCancel = document.querySelector('#expense-cancel');
let btnExpenseSubmit = document.querySelector('#expense-submit');
// functionality
// for displaying if we clcik the add and the expense btn
addButton.addEventListener('click', () => {
    containerDisplay.style.display = 'none';
    containerAdding.style.display = 'block';
});
expenseButton.addEventListener('click', () => {
    containerDisplay.style.display = 'none';
    containerExpense.style.display = 'block';
});
// for cancel button
btnAddCancel.addEventListener('click', () => {
    containerDisplay.style.display = 'block';
    containerAdding.style.display = 'none';
});
btnExpenseCancel.addEventListener('click', () =>{
    containerDisplay.style.display = 'block';
    containerExpense.style.display = 'none';
});
// for submiting and functionality of a program
// FOR ADDING BTN
btnAddSubmit.addEventListener('click', () => {
    addingFunctionality();
});
// FOR EXPENSE
btnExpenseSubmit.addEventListener('click', () => {
    expenseFunctionality();
});

// FUNTIONALITY FOR ADDING AND EXPENSE
function addingFunctionality(){
    // adding the inputed money to balance
    let inputMoney =  inputAddMoney.value;
    let inputDescription = inputAddDescription.value;
    if (inputMoney != ''){
        balance += parseInt(inputMoney)
        balanceValue.innerHTML = balance;
        // putting the input money and description into the history
        let balanceDescriptionObject = {
            isAdding: true,
            Balance: inputMoney,
            Description: inputDescription
        };
        // then add our object into our array 
        historyTracker.push(balanceDescriptionObject)
        // creating html for our history
        let htmlHistory = "";
        historyTracker.forEach((track) => {
            if (track.isAdding){
                let temp = `
                <div class="history-element">
                    <p class="add-balance-history">+${track.Balance}</p>
                    <p class="add-description-history">${track.Description}</p>
                </div>
                `;
                htmlHistory += temp;
            }else{
                let temp = `
                <div class="history-element">
                    <p class="expense-balance-history">-${track.Balance}</p>
                    <p class="expense-description-history">${track.Description}</p>
                </div>
                `;
                htmlHistory += temp;
            }
        });
        // put it into html
        history.innerHTML = htmlHistory;
    }
    // restarting
    inputAddMoney.value = '';
    inputAddDescription.value = '';
    containerDisplay.style.display = 'block';
    containerAdding.style.display = 'none';
};
function expenseFunctionality(){
    // expense the inputed money to balance
    let inputMoney =  inputExpenseMoney.value;
    let inputDescription = inputExpenseDescription.value;
    if (inputMoney != '' && parseInt(inputMoney) <= balance){
        balance -= parseInt(inputMoney)
        balanceValue.innerHTML = balance;
        // putting the input money and description into the history
        let balanceDescriptionObject = {
            isAdding: false,
            Balance: inputMoney,
            Description: inputDescription
        };
        // then add our object into our array 
        historyTracker.push(balanceDescriptionObject)
        // creating html for our history
        let htmlHistory = "";
        historyTracker.forEach((track) => {
            if (track.isAdding){
                let temp = `
                <div class="history-element">
                    <p class="add-balance-history">+${track.Balance}</p>
                    <p class="add-description-history">${track.Description}</p>
                </div>
                `;
                htmlHistory += temp;
            }else{
                let temp = `
                <div class="history-element">
                    <p class="expense-balance-history">-${track.Balance}</p>
                    <p class="expense-description-history">${track.Description}</p>
                </div>
                `;
                htmlHistory += temp;
            }
        });
        // put it into html
        history.innerHTML = htmlHistory;
    }
    // restarting
    inputExpenseMoney.value = '';
    inputExpenseDescription.value = '';
    containerDisplay.style.display = 'block';
    containerExpense.style.display = 'none';
}