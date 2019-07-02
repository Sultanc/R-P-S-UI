const rock = document.querySelector('#rock').addEventListener('click',game);
const paper = document.querySelector('#paper').addEventListener('click',game);
const scissors = document.querySelector('#scissors').addEventListener('click',game);
const reset = document.querySelector('.reset').addEventListener('click',resetGame);
const clickedRock = document.querySelector('#clicked-r');
const clickedPaper = document.querySelector('#clicked-p');
const clickedScissors = document.querySelector('#clicked-s');
const compGuess_R = document.querySelector('#compguess-r');
const compGuess_P = document.querySelector('#compguess-p');
const compGuess_S = document.querySelector('#compguess-s');
const winMsg = document.querySelector('.winner');
const winContainer = document.querySelector('.win-container');
const compScore = document.querySelector('.comp-score');
const playerScore = document.querySelector('.player-score');
const roundsValue = document.querySelector('#input-value');
const popupContainer = document.querySelector('.popup-container');
const winnerCall = document.querySelector('.winner-call');
const prize = document.querySelector('.prize');

//---------------------------------------------------------------

function game(e){


    const computerSelection = computerPlay();
    function computerPlay() {
      let computerGuess = ['rock','paper','scissors'];
      return computerGuess[Math.floor(Math.random() * 3)];
    }
    console.log('COM: ' + computerSelection)
    // console.log(e.target.id)
    console.log('value: ' + roundsValue.value)
    console.log(compScore.innerHTML + ' ' + playerScore.innerHTML)
    
    playRound(computerSelection,e);
    actionDisplay(computerSelection,e);
    gameEnd();
}

//match up
function playRound(computerSelection,e) {
  if (computerSelection === e.target.id) {
    console.log('Draw')
    winMsg.innerHTML = 'Draw';
    winMsg.style.color = 'black';
    return;
  }
  if (computerSelection === 'rock') {
    if (e.target.id === 'paper') {
      console.log('You Win1')
      winMsg.innerHTML = 'You Win';
      winMsg.style.color = 'rgb(46, 206, 6)';
      playerScore.innerHTML ++;
      return;
    }else 
        console.log('COM win1')
        winMsg.innerHTML = 'You Lose 💩';
        winMsg.style.color = 'red';
        compScore.innerHTML ++;
        return;
     }
  if (computerSelection === 'paper') {
    if (e.target.id === 'rock') {
      console.log('COM win2')
      winMsg.innerHTML = 'You Lose 💩';
      winMsg.style.color = 'red';
      compScore.innerHTML ++;
      return;
    }else 
        console.log('You Win2')
        winMsg.innerHTML = 'You Win';
        winMsg.style.color = 'rgb(46, 206, 6)';
        playerScore.innerHTML ++;
        return;
    }
  if (computerSelection === 'scissors') {
    if (e.target.id === 'rock') {
      console.log('You Win3')
      winMsg.innerHTML = 'You Win';
      winMsg.style.color = 'rgb(46, 206, 6)';
      playerScore.innerHTML ++;
      return;
    }else 
        console.log('COM win3')
        winMsg.innerHTML = 'You Lose 💩';
        winMsg.style.color = 'red';
        compScore.innerHTML ++;
        return;
    }
} 
  
//game action display
function actionDisplay(computerSelection,e) {
  if (e.target.id == 'rock') {
    clickedRock.style.display = 'block';
  }else clickedRock.style.display = 'none';

  if (e.target.id == 'paper') {
    clickedPaper.style.display = 'block';
  }else clickedPaper.style.display = 'none';

  if (e.target.id == 'scissors') {
    clickedScissors.style.display = 'block';
  }else clickedScissors.style.display = 'none';

  if (computerSelection == 'rock') {
    compGuess_R.style.display = 'block';
  }else compGuess_R.style.display = 'none';

  if (computerSelection == 'paper') {
    compGuess_P.style.display = 'block';
  }else compGuess_P.style.display = 'none';

  if (computerSelection == 'scissors') {
    compGuess_S.style.display = 'block';
  }else compGuess_S.style.display = 'none';
}

function gameEnd() {
  if ((Number(compScore.innerHTML) >= Number(roundsValue.value)) || (Number(playerScore.innerHTML) >= Number(roundsValue.value))) {
    console.log('value: ' + roundsValue.value)
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    popupContainer.style.display= 'block';
    if (Number(compScore.innerHTML) > Number(playerScore.innerHTML)) {
      winnerCall.innerHTML = 'You Lose 💩'
      winnerCall.style.color = 'red';
    }
    if (Number(playerScore.innerHTML) > Number(compScore.innerHTML)) {
      winnerCall.innerHTML = 'You Win';
      winnerCall.style.color = 'rgb(46, 206, 6)';
      prize.style.display = 'block';
    }
  }
}

function resetGame() { //play again button
  playerScore.innerHTML = '0';
  compScore.innerHTML = '0';
  popupContainer.style.display= 'none';
  prize.style.display = 'none';
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}
