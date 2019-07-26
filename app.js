
const playerMark = "X";
const compMark = "O";
let playerIndices = [];
let compIndices = [];

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

//var board = ["", "", "", "", "", "", "", "", ""];
const boxes = document.querySelectorAll('.game-box');


function reset() {
  for (let i = 0; i < boxes.length; i++) {
    //    board[i] = "";
    boxes[i].innerHTML = "";
    boxes[i].style.removeProperty("background-color", "#ACA")
    boxes[i].addEventListener("click", playerClick);
  };
};

function playerClick(box) {
  markBox(box.target.id, playerMark);
};

function compChooseBox() {

};

function compClick(boxId) {
  markBox(boxId, compMark);
};

function markBox(boxId, mark) {
  //  board[boxId] = mark;
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
      if ( winningCombos[i].every(idx => compIndices.includes(idx)) ) return true;
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
}

function game() {
  reset();
};

game();
