let outputNumber = document.getElementById("output")
let numbers = ["", ""]
let isFirtsNumber = true
let operatorString;
// function input from the user
function inputUser(number){
    // check if we are in the first number or second
    if(isFirtsNumber){
        numbers[0] += number
        outputNumber.value = numbers[0]  
    }else{
        numbers[1] += number
        outputNumber.value = outputNumber.value + "" + number
    }
    
}
// input for operator
function operator(op){
    // check if we are in the first number, so it cant duplicate the operator
    if(isFirtsNumber){
    operatorString = op
    outputNumber.value = outputNumber.value + "" + op;
    isFirtsNumber = false 
    }
    
}
// equal function
function equalCompute(){
    // base condition if we in firstnumber we cant equal because we need operator and second number
    if(isFirtsNumber){
        return
    }
    let result;
    if(operatorString == '+'){
        result = parseFloat(numbers[0]) + parseFloat(numbers[1])
    }else if(operatorString == '-'){
        result = parseFloat(numbers[0]) - parseFloat(numbers[1])
    }else if(operatorString == 'x'){
        result = parseFloat(numbers[0]) * parseFloat(numbers[1])
    }else if(operatorString == '/'){
        result = parseFloat(numbers[0]) / parseFloat(numbers[1])
    }
    outputNumber.value = result
    numbers = [result, ""]
    isFirtsNumber = true
    operatorString = ""
}
// removing function
function remove(){
    let temp = "" + outputNumber.value
    let arr = temp.split("");
    let i = temp.length-1
    // check if we remove the operator to bring the first number
    if (arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] =='/'){
        operatorString= ""
        isFirtsNumber = true
    }
    arr[i] = ""
    convertToString = arr.join("");
    // print the updated value
    outputNumber.value = convertToString;
    // check if we are in the firtsnumber of not to update the current number
    if (isFirtsNumber){
        numbers[0] = outputNumber.value
    }else{
        numbers[1] = outputNumber.value
    }
}
// clear all the value 
function clearAll(){
    outputNumber.value = ""
    numbers = ["", ""]
    isFirtsNumber = true
    operatorString = ""
}


