const rock = document.querySelector('#rock').addEventListener('click',game);
const paper = document.querySelector('#paper').addEventListener('click',game);
const scissors = document.querySelector('#scissors').addEventListener('click',game);
const clickedRock = document.querySelector('.clicked-r');
const clickedPaper = document.querySelector('.clicked-p');
const clickedScissors = document.querySelector('.clicked-s');
const compGuess_R = document.querySelector('.compguess-r');
const compGuess_P = document.querySelector('.compguess-p');
const compGuess_S = document.querySelector('.compguess-s');

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
  switch (e.target.id) {
    case '#rock':
      clickedRock.style.display = 'block';
      console.log('hahah');
      break;
  }
}
