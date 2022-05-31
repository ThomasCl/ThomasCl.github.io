let board = [[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]]

// 1 = body1
// 2 = head1
// 3 = body2
// 4 = head2
playing = false;
let x1 = 4;
let y1 = 10;
let x2 = 15;
let y2 = 10;
var direction1 = 1;
var direction2 = 3;
playinterval = setInterval(gameplay,250)
window.onload = function(){
    draw_my_board();
}

function draw_my_board(){
  container = document.getElementById("my_field");
  board_html = drawboard();
  container.innerHTML = board_html;
}

function startgame(){
  for(x = 0; x < 20; x++){
    for(y = 1; y < 21; y++){
      board[y][x]=0;
    }
  }
  x1 = 4;
  y1 = 10;
  x2 = 15;
  y2 = 10;
  board[10][4] = 2;
  board[10][15] = 4;
  draw_my_board();
}

function drawboard(){
  line = `<table>`;
  for (y = 1; y < 21; y++){
    line += "<tr>";
    for (x = 0; x < 20; x++){
      if(board[y][x] == 0){
        line += `<td class = "empty_board" bgcolor = "lightgray"></td>`;
      }
      if(board[y][x] == 1){
        line += `<td class = "body1" bgcolor = "dodgerblue"></td>`;
      }
      if(board[y][x] == 2){
        line += `<td class = "head1" bgcolor = "blue"></td>`;
      }
      if(board[y][x] == 3){
        line += `<td class = "body2" bgcolor = "darkorange"></td>`;
      }
      if(board[y][x] == 4){
        line += `<td class = "head2" bgcolor = "red"></td>`;
      }
      if(board[y][x] == 5){
        line += `<td class = "End" bgcolor = "Black"></td>`;
      }
    }
    line += "</tr>";
    x = 0;
  }
  line += "</table>"
  return line
}

window.addEventListener("keyup", (e) => {
  if (e.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  if (e.key == "q") {
    if (direction1 == 1) {
      return;
    }
    direction1 = 3
  } else if (e.key == "z") {
    if (direction1 == 2) {
      return;
    }
    direction1 = 4
  } else if (e.key == "d") {
    if (direction1 == 3) {
      return;
    }
    direction1 = 1
  } else if (e.key == "s") {
    if (direction1 == 4) {
      return;
    }
    direction1 = 2
  } else if (e.key == "ArrowLeft") {
    if (direction2 == 1) {
      return;
    }
    direction2 = 3;
  } else if (e.key == "ArrowUp") {
    if (direction2 == 2) {
      return;
    }
    direction2 = 4;
  } else if (e.key == "ArrowRight") {
    if (direction2 == 3) {
      return;
    }
    direction2 = 1;
  } else if (e.key == "ArrowDown") {
    if (direction2 == 4) {
      return;
    }
    direction2 = 2;
  } if (e.key == "Enter"){
    playing = true;
  }
  e.preventDefault();
}, true);

function findplayer(player){
  for(y = 1; y < 21; y++){
    for (x = 0; x < 20; x++){
      if (board[y][x] == player * 2){
        if(player == 1){
          x1 = x;
          y1 = y;
          return;
        }
        if (player == 2){
          x2 = x;
          y2 = y;
          return;
        }
      }
    }
  }
}

function move1(direction1){
  if(direction1 == 1){
    board[y1][x1] = 1;
    board[y1][x1+1] = 2;
  }
  else if(direction1 == 3){
    board[y1][x1] = 1;
    board[y1][x1-1] = 2;
  }
  else if(direction1 == 4){
    board[y1][x1] = 1;
    board[y1-1][x1] = 2;
  }
  else if (direction1 == 2){
    board[y1][x1] = 1;
    board[y1+1][x1] = 2;
  }
}

function move2(direction2){
  if(direction2 == 1){
    board[y2][x2] = 3;
    board[y2][x2+1] = 4;
  }
  else if(direction2 == 3){
    board[y2][x2] = 3;
    board[y2][x2-1] = 4;
  }
  else if(direction2 == 4){
    board[y2][x2] = 3;
    board[y2-1][x2] = 4;
  }
  else if (direction2 == 2){
    board[y2][x2] = 3;
    board[y2+1][x2] = 4;
  }
}

function collission1(){
  if(direction1 == 1){
    if (board[y1][x1+1] != 0){
      return true;
    }
  }
  else if(direction1 == 3){
    if (board[y1][x1-1] != 0){
      return true;
    }
  }
  else if(direction1 == 4){
    if (board[y1-1][x1] != 0){
      return true;
    }
  }
  else if (direction1 == 2){
    if (board[y1+1][x1] != 0){
      return true;
    }
  }
  return false;
}

function collission2(){
  if(direction2 == 1){
    if (board[y2][x2+1] != 0){
      return true;
    }
  }
  else if(direction2 == 3){
    if (board[y2][x2-1] != 0){
      return true;
    }
  }
  else if(direction2 == 4){
    if (board[y2-1][x2] != 0){
      return true;
    }
  }
  else if (direction2 == 2){
    if (board[y2+1][x2] != 0){
      return true;
    }
  }
  return false;
}

function losers(bots1, bots2){
  direction1 = 1;
  direction2 = 3;
  playing = false;
  for(i = 1; i < 21; i++){
    for(j = 0; j < 20; j++){
      if(board[i][j] == 0){
        board[i][j] = 5;
      }
    }
  }
  draw_my_board();
 if (bots1 == true && bots2 == true){
   alert("HAHA 2 losers");
 }
 else if (bots1 == true){
   alert("Blauw is ne loser");
 }
 else if (bots2 == true){
   alert("Rood is ne loser");
 }
 startgame()
}

function gameplay(){
  if (!playing){
    return;
  }
  let bots1 = false
  let bots2 = false
  findplayer(1);
  findplayer(2);
  if(collission1() == true){
    bots1 = true;
  }
  if (collission2() == true){
    bots2 = true;
  }
  if (bots1 == true || bots2 == true){
    losers(bots1, bots2);
  }
  if(playing){
    move1(direction1);
    move2(direction2);
    draw_my_board();
  }
}
