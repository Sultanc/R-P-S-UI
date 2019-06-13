const rock = document.querySelector('#rock').addEventListener('click',game);
const paper = document.querySelector('#paper').addEventListener('click',game);
const scissors = document.querySelector('#scissors').addEventListener('click',game);
const clickedRock = document.querySelector('#clicked-r');
const clickedPaper = document.querySelector('#clicked-p');
const clickedScissors = document.querySelector('#clicked-s');
const compGuess_R = document.querySelector('#compguess-r');
const compGuess_P = document.querySelector('#compguess-p');
const compGuess_S = document.querySelector('#compguess-s');
// const cssSheet = document.querySelector('#linkElement').sheet;

function game(e){
    const computerSelection = computerPlay();
    function computerPlay() {
      let computerGuess = ['rock','paper','scissors'];
      return computerGuess[Math.floor(Math.random() * 3)];
    }
    console.log('COM: ' + computerSelection)
    console.log(e.target.id)
    actionDisplay(computerSelection,e);
    playRound(computerSelection,e);
}

//match up
function playRound(computerSelection,e) {
  if (computerSelection === e.target.id) {
    console.log('Draw')
    return;
  }
  if (computerSelection === 'rock') {
    if (e.target.id === 'paper') {
      // playerScore ++;
      console.log('You Win1')
      return;
    }else 
        console.log('COM win1')
        return;
     }
  if (computerSelection === 'paper') {
    if (e.target.id === 'rock') {
      console.log('COM win2')
      return;
    }else 
        console.log('You Win2')
        return;
    }
  if (computerSelection === 'scissors') {
    if (e.target.id === 'rock') {
      console.log('You Win3')
      return;
    }else 
        console.log('COM win3')
        return;
    }
} 
  
//switch to display action
function actionDisplay(computerSelection,e) {
  switch (e.target.id) {
    case 'rock':
      clickedRock.classList.add('clicked-r');
      break;
      case 'paper':
      clickedPaper.classList.add('clicked-p');
      break;
      case 'scissors':
      clickedScissors.classList.add('clicked-s');
      break;
  }
  switch (computerSelection) {
    case 'rock':
      compGuess_R.classList.add('compguess-r');
      break;
      case 'paper':
      compGuess_P.classList.add('compguess-p');
      break;
      case 'scissors':
      compGuess_S.classList.add('compguess-s');
      break;
  }
}
