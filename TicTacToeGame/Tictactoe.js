let board = []
// get the button and socre form the html
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let playerOneScore = document.getElementById("playerOne");
let playerTwoScore = document.getElementById("playerTwo");
let winner = document.getElementById("winner");
// determine if btn already click
let isClick = []
// determine the score
let pos = 0
let pts = 0
// determine if X or O
let isPlayer1 = true
// put default to btn, then change it to true if its alreasdy click
function isClicked(){
    for(let i = 0; i < 9; i++){
        isClick[i] = false
    }
}
// determine whats button click through index
function boardClick(index){
    determineTheInput(index)
}
// determin the input and insert the value
function determineTheInput(index){
    if (!isClick[index]){
        if(isPlayer1){
            board[index] = "X"
            isClick[index] = true
            display()
            isPlayer1 = false
            //check the winners
            WINNERS()
        }else{
            board[index] = "O"
            isClick[index] = true
            display()
            isPlayer1 = true
            //check the winners
            WINNERS()
        }
    }
    
}
// display the x or o base on the btn using out array board
function display(){
    btn1.textContent = board[0]
    btn2.textContent = board[1]
    btn3.textContent = board[2]
    btn4.textContent = board[3]
    btn5.textContent = board[4]   
    btn6.textContent = board[5]
    btn7.textContent = board[6]
    btn8.textContent = board[7]
    btn9.textContent = board[8]   
}
// reset display
function resetDisplay(){
    btn1.textContent = ""
    btn2.textContent = ""
    btn3.textContent = ""
    btn4.textContent = ""
    btn5.textContent = ""   
    btn6.textContent = ""
    btn7.textContent = ""
    btn8.textContent = ""
    btn9.textContent = ""  
}
// reset out board and scores
function resetBtn(){
    board = []
    isPlayer1 = true
    isClicked()
    pos = 0
    pts = 0
    playerOneScore.value = 0
    playerTwoScore.value = 0
    winner.textContent = ""
    btn1.textContent = ""
    btn2.textContent = ""
    btn3.textContent = ""
    btn4.textContent = ""
    btn5.textContent = ""   
    btn6.textContent = ""
    btn7.textContent = ""
    btn8.textContent = ""
    btn9.textContent = ""  
}

// THE MAIN LOGIC OF THE GAME //
// check the winners
function WINNERS(){
    if(isPlayerOneWin()){
        pos += 1
        playerOneScore.value = pos
        winner.textContent = "Player One Win"
        // reset all after determine the winner
        board = []
        isPlayer1 = true
        isClicked()
        resetDisplay()
    }else if(isPlayerTwoWin()){
        pts += 1
        playerTwoScore.value = pts
        winner.textContent = "Player Two Win"
        // reset all after determine the winner
        board = []
        isPlayer1 = true
        isClicked()
        resetDisplay()
    }else if(isDraw()){
        winner.textContent = "Its a Draw"
        // reset all after determine the its a draw
        board = []
        isPlayer1 = true
        isClicked()
        resetDisplay()
    }
}
//
function isPlayerOneWin() {
    // Check horizontal
    if (board[0] == "X" && board[1] == "X" && board[2] == "X"){
        return true
    }
    if (board[3] == "X" && board[4] == "X" && board[5] == "X"){
        return true
    }
    if (board[6] == "X" && board[7] == "X" && board[5] == "8"){
        return true
    }
    // check vertical
    if (board[0] == "X" && board[3] == "X" && board[6] == "X"){
        return true
    }
    if (board[1] == "X" && board[4] == "X" && board[7] == "X"){
        return true
    }
    if (board[2] == "X" && board[5] == "X" && board[8] == "8"){
        return true
    }
    // check the exis
    if (board[2] == "X" && board[4] == "X" && board[6] == "X"){
        return true
    }
    if (board[0] == "X" && board[4] == "X" && board[8] == "X"){
        return true
    }

    return false;
}

function isPlayerTwoWin() {
    // Check horizontal
    if (board[0] == "O" && board[1] == "O" && board[2] == "O"){
        return true
    }
    if (board[3] == "O" && board[4] == "O" && board[5] == "O"){
        return true
    }
    if (board[6] == "O" && board[7] == "O" && board[5] == "8"){
        return true
    }
    // check vertical
    if (board[0] == "O" && board[3] == "O" && board[6] == "O"){
        return true
    }
    if (board[1] == "O" && board[4] == "O" && board[7] == "O"){
        return true
    }
    if (board[2] == "O" && board[5] == "O" && board[8] == "Os"){
        return true
    }
    // check the eOis
    if (board[2] == "O" && board[4] == "O" && board[6] == "O"){
        return true
    }
    if (board[0] == "O" && board[4] == "O" && board[8] == "O"){
        return true
    }

    return false;
}
function isDraw(){
    for(let i = 0; i < 9; i++){
        if(!isClick[i]){
            return false
        }
    }
    return true
   
}


