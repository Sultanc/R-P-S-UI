const rock = document.querySelector('#rock').addEventListener('click',game);
const paper = document.querySelector('#paper').addEventListener('click',game);
const scissors = document.querySelector('#scissors').addEventListener('click',game);


function game(e){
    const computerSelection = computerPlay();
    function computerPlay() {
      let computerGuess = ['rock','paper','scissors'];
      return computerGuess[Math.floor(Math.random() * 3)];
    }
    
    console.log('COM: ' + computerSelection)
    console.log(e.target)
    playRound(computerSelection,e);
    actionDisplay(computerSelection,e);
}

function playRound(computerSelection,e) {
  if (computerSelection === e.target.id) {
    console.log('Draw')
    
 }
}
//switch cases to display action
function actionDisplay(computerSelection,e) {
  switch
}
