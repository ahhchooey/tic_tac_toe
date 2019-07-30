
const playerMark = "X";
const compMark = "O";
let playerIndices = [];
let compIndices = [];

const resultBox_div = document.querySelector('.game-result')
const result_p = document.getElementById('result')
const resultButton_button = document.getElementById('replay-button')
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

var board = ["", "", "", "", "", "", "", "", ""];
const boxes = document.querySelectorAll('.game-box');


function reset() {
  resultBox_div.style.setProperty("display", "none");
  playerIndices = [];
  compIndices = [];
  for (let i = 0; i < boxes.length; i++) {
    board[i] = "";
    boxes[i].innerHTML = "";
    boxes[i].style.removeProperty("background-color", "#ACA")
    boxes[i].addEventListener("click", playerClick);
  };
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, sleep));
};

function playerClick(box) {
  markBox(box.target.id, playerMark);
  let won = winner(playerMark);  
  let tied = tie();
  if (won) {
    displayWinner(playerMark);
    return;
  };
  if (tied) {itsATie()};
  compIndex = compChooseBox();
  sleep(1000).then(compClick(compIndex))
  won = winner(compMark);
  if (won) {
    displayWinner(compMark);
    return;
  };
};

function compChooseBox() {
  let emptyIndices = []
  for (let i = 0; i < board.length; i ++) {
    if ( board[i] == "" ) { emptyIndices.push(i) }
  };
  return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
};

function compClick(boxId) {
  markBox(boxId, compMark);
};

function markBox(boxId, mark) {
  board[boxId] = mark;
  document.getElementById(boxId).innerHTML = mark;
  if ( mark == "X" ) {playerIndices.push(parseInt(boxId))}
  else if ( mark == "O" ) {compIndices.push(parseInt(boxId))};
  boxes[boxId].removeEventListener("click", playerClick);
  boxes[boxId].style.setProperty("background-color", "#ACA")
  console.log(boxId);
  if ( winner(mark) ) {console.log("winner")};
};

function winner(mark) {
  if (mark == "X") {
    for (let i = 0; i < winningCombos.length; i++) {
      if ( winningCombos[i].every(idx => playerIndices.includes(idx)) ) return true; 
    };
  } else if (mark == "O") {
    for (let j = 0; j < winningCombos.length; j++) {
      if ( winningCombos[j].every(idx => compIndices.includes(idx)) ) return true;
    };
  };
  return false
};

function tie() {
  if (winner("X") || winner("O")) {return false};
  if (playerIndices.length + compIndices.length == 9) {return true};
  return false
};

function gameOver() {
  if (winner("X") || winner("O") || tie()) {return true};
  return false;
};

function itsATie() {
  for (i = 0; i < board.length; i++) {
    boxes[i].removeEventListener('click', playerClick);    
  };
  result_p.innerHTML = `It's a tie. \n Would you like to play again?`;
  resultButton_button.addEventListener('click', game);
  resultBox_div.style.setProperty("display", "block");
}

function displayWinner(mark) {
  for (i = 0; i < board.length; i++) {
    boxes[i].removeEventListener('click', playerClick);    
  };
  result_p.innerHTML = `${mark} WINS!! \n Would you like to play again?`;
  resultButton_button.addEventListener('click', game);
  resultBox_div.style.setProperty("display", "block");
};

function game() {
  reset();
};


game();
