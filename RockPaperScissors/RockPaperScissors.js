// get the class of display
let yourDisplay = document.querySelector('.yourDisplay')
let computerDisplay = document.querySelector('.computerDisplay')
let winnerDsisplay = document.querySelector('.winnerDisplay')
let scoreDisplay = document.querySelector('.scoreDisplay')

// score count
let yourScore = 0
let computerScore = 0
// computer input
function computerTrow(){
    let random = Math.floor(Math.random() * 3) + 1
    return random
}
// check the winner and get the input of user 
function checkWinners(trow){
    computer = computerTrow()
    user = trow
    displayTrow(user, computer)
    if (user == computer){
        winnerDsisplay.textContent = "its a Tie"
        return
    }
    if ((user == 1 && computer == 3) || (user == 2 && computer == 1) || (user == 3 &&  computer == 2)){
        winnerDsisplay.textContent = "You Win"
        yourScores()
        displayScores()
        return
    }
    if ((computer == 1 && user == 3) || (computer == 2 && user == 1) || (computer == 3 &&  user == 2)){
        winnerDsisplay.textContent = "Computer Win"
        compScores()
        displayScores()
        return
    }
}
// display throw and print
function displayTrow(user, computer){
    userTrow = ""
    compTrow = ""
    if (user == 1){
        userTrow = "Rock"
    }else if(user == 2){
        userTrow = "Paper"
    }else if(user == 3){
        userTrow = "Scissors"
    }
    if (computer == 1){
        compTrow = "Rock"
    }else if(computer == 2){
        compTrow = "Paper"
    }else if(computer == 3){
        compTrow = "Scissors"
    }
    yourDisplay.textContent = userTrow
    computerDisplay.textContent = compTrow
}
// Socores count and display
function yourScores(){
    yourScore += 1
}
function compScores(){
    computerScore += 1
}
function displayScores(){
    scoreDisplay.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
}
// reset all
function reset(){
    yourScore = 0
    computerScore = 0
    scoreDisplay.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
    winnerDsisplay.textContent = ""
    yourDisplay.textContent = ""
    computerDisplay.textContent =""
}

