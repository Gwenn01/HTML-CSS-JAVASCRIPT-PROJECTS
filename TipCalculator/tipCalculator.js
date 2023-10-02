// VARIBALE
let Bill = 0;
let Tip = 0;
let People = 1;
let inputBill  = document.querySelector('#bill-total-input');
let inputTip = document.querySelector('#tip-input');
let peopleDisplay = document.querySelector('#people-count');
let increamentPoeple = document.querySelector('#people-increament');
let decreamentPoeple = document.querySelector('#people-decreament');
let BillDisplay = document.querySelector('#Bill');

// EVENT FOR WHEN CLICK
inputBill.addEventListener('input', () => {
    if (inputBill.value == ''){
        Bill = 0;
        updateTheBill();
    }else{
        restartTip();
        Bill = parseFloat(inputBill.value);
        updateTheBill();
    }
});
inputTip.addEventListener('input', () => {
    if (inputTip.value == ''){
        Tip = 0;
        updateTheBill();
    }else{
        let temp = Bill;
        Tip = (temp * (parseFloat(inputTip.value)/100))
        updateTheBill();
    }
});
increamentPoeple.addEventListener('click', () => {
    People += 1;
    peopleDisplay.innerHTML = People;
    updateTheBill();
});
decreamentPoeple.addEventListener('click', () => {
    if (People > 1){
        People -= 1;
        peopleDisplay.innerHTML = People;
        updateTheBill();
    }
});
// FUNCTIONALITY
function updateTheBill(){
    let totalBill = (Bill + Tip)/People;
    BillDisplay.innerHTML = `$${totalBill.toFixed(2)}`;
}
function restartTip(){
    Tip = 0;
    inputTip.value = "";
}