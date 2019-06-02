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
  }
  if (computerSelection === 'rock') {
    if (e.target.id === 'paper') {
      // playerScore ++;
      console.log('You Win')
      return 'you win'
    }else {'scissors'}
        console.log('COM win')
        return 'Computer is the Winner! r>s';
     }
  if (computerSelection === 'paper') {
    if (e.target.id === 'rock') {
      console.log('COM win')
      return 'Computer is the Winner! p>r';
    }else {
        console.log('You Win')
        return 'You Win';
      }
    }
  if (computerSelection === 'scissors') {
    if (e.target.id === 'rock') {
        console.log('You Win')
        return 'You win';
    }else {
        console.log('COM win')
        return 'Computer is the Winner! s>p';
      }
    }
} 
  
  

//switch to display action
function actionDisplay(computerSelection,e) {
  switch (e.target.id) {
    case 'rock':
      clickedRock.style.display = 'block';
      break;
      case 'paper':
      clickedPaper.style.display = 'block';
      break;
      case 'scissors':
      clickedScissors.style.display = 'block';
      break;
  }
  switch (computerSelection) {
    case 'rock':
      compGuess_R.style.display = 'block';
      break;
      case 'paper':
      compGuess_P.style.display = 'block';
      break;
      case 'scissors':
      compGuess_S.style.display = 'block';
      break;
  }
}
