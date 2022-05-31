let board =[[8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
  [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]];

var points = 0
var blocknr = 0
var orient = 0
playing = false;
playinterval = setInterval(update,400);
window.onload = function(){
  make_blocks();
  draw_my_board();
}

function update(){
  if (!playing){
    return;
  }
  placement();
  replaceblock("down");
  return;
}

//remove and place block
function replaceblock(move){
  removeblock();
  list = blockfinder();
  x = list[0];
  y = list[1];
  if (move == "left"){
    board[y][x-1] = blocknr;
    board[y][x] = 0;
    moveBlock(x-1,y);
  }
  else if(move == "right"){
    board[y][x+1] = blocknr;
    board[y][x] = 0;
    moveBlock(x+1,y);
  }
  else if(move == "down"){
    board[y+1][x] = blocknr;
    board[y][x] = 0;
    moveBlock(x,y+1);
  }
  draw_my_board()
}

function newgame(){
  board = [[8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
               [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]];
}

function draw_my_board(){
  container = document.getElementById("my_field");
  board_html = drawboard();
  container.innerHTML = board_html;
  container = document.getElementById("points");
  container.innerHTML = points;
}

function drawboard(){
  line = `<table>`;
  for (y = 0; y < 22; y++){
    line += "<tr>";
    for (x = 0; x < 12; x++){
      if(board[y][x] == 0){
        line += `<td class = "empty_board" bgcolor = "lightgray"></td>`;
      }
      if((board[y][x] == 1)||(board[y][x] == 11)||(board[y][x] == 21)){
        line += `<td class = "I-block" bgcolor = "cyan"></td>`;
      }
      if((board[y][x] == 2)||(board[y][x] == 12)||(board[y][x] == 22)){
        line += `<td class = "J-block" bgcolor = "blue"></td>`;
      }
      if((board[y][x] == 3)||(board[y][x] == 13)||(board[y][x] == 23)){
        line += `<td class = "L-block" bgcolor = "darkorange"></td>`;
      }
      if((board[y][x] == 4)||(board[y][x] == 14)||(board[y][x] == 24)){
        line += `<td class = "O-block" bgcolor = "yellow"></td>`;
      }
      if((board[y][x] == 5)||(board[y][x] == 15)||(board[y][x] == 25)){
        line += `<td class = "S-block" bgcolor = "green"></td>`;
      }
      if((board[y][x] == 6)||(board[y][x] == 16)||(board[y][x] == 26)){
        line += `<td class = "T-block" bgcolor = "purple"></td>`;
      }
      if((board[y][x] == 7)||(board[y][x] == 17)||(board[y][x] == 27)){
        line += `<td class = "Z-block" bgcolor = "red"></td>`;
      }
      if(board[y][x] == 8){
        line += `<td class = "border" bgcolor = "darkgray"></td>`;
      }
    }
    line += "</tr>";
    x = 0;
  }
  line += "</table>";
  return line;
}

function blockfinder(){
  for (y = 1; y < 21; y++){
    for (x = 1; x < 11; x++){
      if(board[y][x] == blocknr){
        return[x, y];
      }
    }
    x = 1;
  }
}

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter"){
    playing = true;
  }

  if(!playing){return;}
  block = blocknr
  list = blockfinder();
  x = list[0];
  y = list[1];

  if (e.key == "q"){
    if(cantgo("left")){
      return;
    }
    replaceblock("left");
    return;
  }
  else if (e.key == "z"){
    removeblock();
    block = blocknr
    list = blockfinder();
    x = list[0];
    y = list[1];
    if (orient == 3){
      orient = 0;
      moveBlock(x,y);
      draw_my_board();
      return;
    }
    orient += 1;
    moveBlock(x,y);
    draw_my_board()
    return;
  }
  else if (e.key == "d"){
    if(cantgo("right")){
      return;
    }
    replaceblock("right");
    return;
  }
  else if (e.key == "s"){
    placement();
    replaceblock("down");
    return;
  }

  e.preventDefault();
}, true);

function findfigures(){
  block1 = blockfinder();
  x = block1[0];
  y = block1[1];
  block2 = [];
  block3 = [];
  block4 = [];
  count = 1;
  if (blocknr == 1){
    if (board[y-1][x] == 11){
      block2 = [x, y-1];
      block3 = [x, y+1];
      block4 = [x, y+2];
      return[block1, block2, block3, block4];
    }
    if (board[y][x-1] == 11){
      block2 = [x-1, y];
      block3 = [x+1, y];
      block4 = [x+2, y];
      return[block1, block2, block3, block4];
    }
  }
  else{
    for (k = x-1; k < x+2; k++){
      for (j = y-1; j < y+2; j++){
        if(board[j][k] == blocknr + 10){
          if (count == 1){
            block2 = [k,j];
          }
          if (count == 2){
            block3 = [k,j];
          }
          if (count == 3){
            block4 = [k,j];
            return[block1, block2, block3, block4];
          }
          count += 1
        }
      }
      j = y-1;
    }
  }
}

// blokken vastzetten als ze nergens meer naartoe kunnen
function placement(){

  for (i = 0; i < 4; i++){
    list = findfigures();
    x = list[i][0];
    y = list[i][1];
    if ((board[y+1][x] != 0)&&(board[y+1][x] != blocknr)&&(board[y+1][x] != blocknr + 10)){
      for (j = 0; j < 4; j++){
        board[list[j][1]][list[j][0]] = blocknr + 20;
      }
      orient = 0;
      make_blocks();
      return;
    }
  }
}

function cantgo(dir){
  for (i = 0; i < 4; i++){
    list = findfigures();
    x = list[i][0];
    y = list[i][1];
    if(dir == "right"){
      if ((board[y][x+1] != 0)&&(board[y][x+1] != blocknr)&&(board[y][x+1] != blocknr + 10)) {
        return true;
      }
    }
    if(dir == "left"){
      if ((board[y][x-1] != 0)&&(board[y][x-1] != blocknr)&&(board[y][x-1] != blocknr + 10)) {
        return true;
      }
    }
  }
}

function make_blocks(){
  row = checkrow();
  if(row != []){
    deleterow(row);
  }
  blocknr = Math.floor(Math.random()*7)+1;

  if(blocknr == 1){
     moveI(5, 1, 0);
  }
  if(blocknr == 2){
    moveJ(5, 2, 0);
  };
  if(blocknr == 3){
    moveL(5, 2, 0);
  }
  if(blocknr == 4){
    moveO(5, 1, 0);
  }
  if(blocknr == 5){
    moveS(5, 2, 0);
  }
  if(blocknr == 6){
    moveT(5, 2, 0);
  }
  if(blocknr == 7){
    moveZ(5, 2, 0);
  }
}

function moveBlock(x, y){
  if(blocknr == 1){
    moveI(x, y);
  }
  if(blocknr == 2){
    moveJ(x, y);
  };
  if(blocknr == 3){
    moveL(x, y);
  }
  if(blocknr == 4){
    moveO(x, y);
  }
  if(blocknr == 5){
    moveS(x, y);
  }
  if(blocknr == 6){
    moveT(x, y);
  }
  if(blocknr == 7){
    moveZ(x, y);
  }
}

function moveI(x, y){
  if((orient == 0) || (orient == 2)){
    if(canrotate(x-1,y) && canrotate(x,y) && canrotate(x+1,y) && canrotate(x+2,y)){
      board[y][x-1] = 11;
      board[y][x] = 1;
      board[y][x+1] = 11;
      board[y][x+2] = 11;
      return;
    }
    else if(orient == 2){
      orient --;
      moveI(x,y);
      return;
    }
    else{
      orient == 3;
      moveI(x,y);
      return;}
  }
  if((orient == 1) || (orient == 3)){
    if(canrotate(x,y-1) && canrotate(x,y) && canrotate(x,y+1) && canrotate(x,y+2)){
      board[y-1][x] = 11;
      board[y][x] = 1;
      board[y+1][x] = 11;
      board[y+2][x] = 11;
    }
    else{
      orient --;
      moveI(x,y);
      return;}
  }
}

function moveJ(x, y){
  if (orient == 0){
    if(canrotate(x,y) && canrotate(x-1,y) && canrotate(x-1,y-1) && canrotate(x+1,y)){
      board[y][x] = 2;
      board[y][x-1] = 12;
      board[y-1][x-1] = 12;
      board[y][x+1] = 12;
      return;
    }
    else{
      orient = 3;
      moveJ(x,y);
      return;
    }
  }
  if (orient == 1){
    if(canrotate(x,y) && canrotate(x,y-1) && canrotate(x,y+1) && canrotate(x+1,y-1)){
      board[y][x] = 2;
      board[y-1][x] = 12;
      board[y+1][x] = 12;
      board[y-1][x+1] = 12;
      return;
    }
    else{
      orient --;
      moveJ(x,y);
      return;
    }
  }
  if (orient == 2){
    if(canrotate(x,y) && canrotate(x-1,y) && canrotate(x+1,y+1) && canrotate(x+1,y)){
      board[y][x] = 2;
      board[y][x-1] = 12;
      board[y+1][x+1] = 12;
      board[y][x+1] = 12;
      return;
    }
    else{
      orient --;
      moveJ(x,y);
      return;
    }
  }
  if (orient == 3){
    if(canrotate(x,y) && canrotate(x,y-1) && canrotate(x,y+1) && canrotate(x-1,y+1)) {
      board[y][x] = 2;
      board[y - 1][x] = 12;
      board[y + 1][x] = 12;
      board[y + 1][x - 1] = 12;
      return;
    }
    else{
      orient --;
      moveJ(x,y);
      return;
    }
  }
}

function moveL(x, y){
  if (orient == 0){
    if(canrotate(x,y) && canrotate(x-1,y) && canrotate(x+1,y-1) && canrotate(x+1,y)){
      board[y][x] = 3;
      board[y][x-1] = 13;
      board[y-1][x+1] = 13;
      board[y][x+1] = 13;
      return;
    }
    else{
      orient = 3;
      moveL(x,y);
      return;
    }
  }
  if (orient == 1){
    if(canrotate(x,y) && canrotate(x,y-1) && canrotate(x,y+1) && canrotate(x+1,y+1)){
      board[y][x] = 3;
      board[y-1][x] = 13;
      board[y+1][x] = 13;
      board[y+1][x+1] = 13;
      return;
    }
    else{
      orient--;
      moveL(x,y);
      return;
    }
  }
  if (orient == 2){
    if(canrotate(x,y) && canrotate(x-1,y) && canrotate(x-1,y+1) && canrotate(x+1,y)){
      board[y][x] = 3;
      board[y][x-1] = 13;
      board[y+1][x-1] = 13;
      board[y][x+1] = 13;
      return;
    }
    else{
      orient--;
      moveL(x,y);
      return;
    }
  }
  if (orient == 3){
    if(canrotate(x,y) && canrotate(x,y-1) && canrotate(x,y+1) && canrotate(x-1,y-1)){
      board[y][x] = 3;
      board[y-1][x] = 13;
      board[y+1][x] = 13;
      board[y-1][x-1] = 13;
      return;
    }
    else{
      orient--;
      moveL(x,y);
      return;
    }
  }
}

function moveO(x, y){
  board[y][x] = 4;
  board[y+1][x] = 14;
  board[y][x+1] = 14;
  board[y+1][x+1] = 14;
  return;
}

function moveS(x, y){
  if ((orient == 0)||(orient == 2)){
    if(canrotate(x,y) && canrotate(x-1,y) && canrotate(x,y-1) && canrotate(x+1,y-1)){
      board[y][x] = 5;
      board[y][x-1] = 15;
      board[y-1][x] = 15;
      board[y-1][x+1] = 15;
      return;
    }
    else if(orient == 2){
      orient--;
      moveS(x,y);
      return;
    }
    else{
      orient = 3;
      moveS(x,y);
      return;
    }
  }
  if ((orient == 1)||(orient == 3)){
    if(canrotate(x,y) && canrotate(x,y-1) && canrotate(x+1,y) && canrotate(x+1,y+1)){
      board[y][x] = 5;
      board[y-1][x] = 15;
      board[y][x+1] = 15;
      board[y+1][x+1] = 15;
      return;
    }
    else{
      orient--;
      moveS(x,y);
      return;
    }
  }
}

function moveT(x, y){
  if (orient == 0){
    if(canrotate(x,y) && canrotate(x-1,y) && canrotate(x,y-1) && canrotate(x+1,y)){
      board[y][x] = 6;
      board[y][x-1] = 16;
      board[y-1][x] = 16;
      board[y][x+1] = 16;
      return;
    }
    else{
      orient = 3;
      moveT(x,y);
      return;
    }
  }
  if (orient == 1){
    if(canrotate(x,y) && canrotate(x,y-1) && canrotate(x,y+1) && canrotate(x+1,y)){
      board[y][x] = 6;
      board[y-1][x] = 16;
      board[y+1][x] = 16;
      board[y][x+1] = 16;
      return;
    }
    else{
      orient--;
      moveT(x,y);
      return;
    }
  }
  if (orient == 2){
    if(canrotate(x,y) && canrotate(x-1,y) && canrotate(x,y+1) && canrotate(x+1,y)){
      board[y][x] = 6;
      board[y][x-1] = 16;
      board[y+1][x] = 16;
      board[y][x+1] = 16;
      return;
    }
    else{
      orient--;
      moveT(x,y);
      return;
    }
  }
  if (orient == 3){
    if(canrotate(x,y) && canrotate(x-1,y) && canrotate(x,y-1) && canrotate(x,y+1)){
      board[y][x] = 6;
      board[y][x-1] = 16;
      board[y-1][x] = 16;
      board[y+1][x] = 16;
      return;
    }
    else{
      orient--;
      moveT(x,y);
      return;
    }
  }
}

function moveZ(x, y){
  if ((orient == 0)||(orient == 2)){
    if(canrotate(x,y) && canrotate(x+1,y) && canrotate(x,y-1) && canrotate(x-1,y-1)){
      board[y][x] = 7;
      board[y][x+1] = 17;
      board[y-1][x] = 17;
      board[y-1][x-1] = 17;
      return;
    }
    else if(orient == 0){
      orient = 3;
      moveZ(x,y);
      return;
    }
    else{
      orient--;
      moveZ(x,y);
      return;
    }
  }
  if ((orient == 1)||(orient == 3)){
    if(canrotate(x,y) && canrotate(x+1,y-1) && canrotate(x+1,y) && canrotate(x,y+1)){
      board[y][x] = 7;
      board[y-1][x+1] = 17;
      board[y][x+1] = 17;
      board[y+1][x] = 17;
      return;
    }
    else{
      orient--;
      moveZ(x,y);
      return;
    }
  }
}

function checkrow(){
  list = [];
  for(i = 20; i > 0; i--){
    for(j = 1; j < 11; j++){
      if(board[i][j] == 0){
        j = 50;
      }
    }
    if(j < 20){
      list.push(i);
    }
    j = 1;
  }
  return list;
}

function removeblock(){
  list = findfigures();
  for(i=1; i<4; i++){
    x = list[i][0];
    y = list[i][1];
    board[y][x] = 0;
  }
}

function deleterow(rows){
  if(rows.length == 1){
    points += 40;
  }
  else if(rows.length == 2){
    points += 100;
  }
  else if(rows.length == 3){
    points += 300;
  }
  else if(rows.length == 4){
    points += 1200;
  }
  for(i in rows){
    board.splice(rows[i],1);

  }
  for(j = 0; j < rows.length; j++){
    board.splice(1, 0, [8,0,0,0,0,0,0,0,0,0,0,8]);
  }
}

function canrotate(x,y){
  if((board[y][x] != 0) && (board[y][x] != blocknr) && (board[y][x] != blocknr+10)){
    return false;
  }
  else{
    return true;
  }
}
