const rock = document.querySelector('#rock').addEventListener('click',game);
const paper = document.querySelector('#paper').addEventListener('click',game);
const scissors = document.querySelector('#scissors').addEventListener('click',game);
const clickedRock = document.querySelector('#clicked-r');
const clickedPaper = document.querySelector('#clicked-p');
const clickedScissors = document.querySelector('#clicked-s');
const compGuess_R = document.querySelector('#compguess-r');
const compGuess_P = document.querySelector('#compguess-p');
const compGuess_S = document.querySelector('#compguess-s');

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
  
//game action display

function actionDisplay(computerSelection,e) {
  if (e.target.id == 'rock') {
    clickedRock.style.visibility = 'visible';
  }else clickedRock.style.visibility = 'hidden';

  if (e.target.id == 'paper') {
    clickedPaper.style.visibility = 'visible';
  }else clickedPaper.style.visibility = 'hidden';

  if (e.target.id == 'scissors') {
    clickedScissors.style.visibility = 'visible';
  }else clickedScissors.style.visibility = 'hidden';

  if (computerSelection == 'rock') {
    compGuess_R.style.visibility = 'visible';
  }else compGuess_R.style.visibility = 'hidden';

  if (computerSelection == 'paper') {
    compGuess_P.style.visibility = 'visible';
  }else compGuess_P.style.visibility = 'hidden';

  if (computerSelection == 'scissors') {
    compGuess_S.style.visibility = 'visible';
  }else compGuess_S.style.visibility = 'hidden';
}

 
