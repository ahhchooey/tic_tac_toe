
const turnStatement_p = document.getElementById("turn-statement");

const topLeft_div = document.getElementById("top-left")
const topMiddle_div = document.getElementById("top-middle");
const topRight_div = document.getElementById("top-right");
const midLeft_div = document.getElementById("mid-left");
const midMiddle_div = document.getElementById("mid-middle");
const midRight_div = document.getElementById("mid-right");
const botLeft_div = document.getElementById("bot-left");
const botMiddle_div = document.getElementById("bot-middle");
const botRight_div = document.getElementById("bot-right");

const result_div = document.querySelector(".result");


let board = [["_","_","_"], ["_","_","_"], ["_","_","_"]];

function equalToX(element) {
  return element === "x";
};

function equalToO(element) {
  return element === "o";
};

function winByRow(board) {
  for (let i = 0; row < board.length; row++) {
    return board[i].every(equalToX) || board[i].every(equalToO);
  };
};

function winByCol(board) {
  let tempBoard = transpose_board(board);

  return winByRow(tempBoard)
};

function transpose_board(board) {
  newArray = []
  for(let i = 0; i < board[0].length; i++) {
    newArray.push([]);
  };

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board.length; j++) {
      newArray[j].push(board[i][j])
    };
  };

  return newArray;
};

function main() {
  topLeft_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
  topMiddle_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
  topRight_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
  midLeft_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
  midMiddle_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
  midRight_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
  botLeft_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
  botMiddle_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
  botRight_div.addEventListener("click", function(){
    console.log("you clicked me!");
  });
};

main();
