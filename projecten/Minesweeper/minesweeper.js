let my_board = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

let bombs = 20;


function draw_my_board(){
  container = document.getElementById("my_field");
  board_html = ChangeBoard();
  container.innerHTML = board_html;
}


function ChangeBoard(){
  line = `<table style="float: left; margin-top: 10px">`;
  for (let y = 0; y < 11; y++){
    line = line + "<tr>";
    for (let x = 0; x < 11; x++){
      if(x == 0 && y == 0){
        line = line + `<td class="indicator" bgcolor = "gray"></td>`;
      }
      if(x == 0 && y != 0){
        line = line + `<td class="indicator" bgcolor = "gray">${my_board[y][x]}</td>`;
      }
      if(y == 0 && x != 0){
        line = line + `<td class="indicator" bgcolor = "gray">${my_board[y][x]}</td>`;
      }
      if(my_board[y][x] == 0 && x != 0 && y != 0){
        line = line + `<td class="my_empty_board_element" bgcolor = "white"></td>`;
      }
      if(my_board[y][x] == 1 && x != 0 && y != 0){
        line = line +  `<td class="my_boat_board_element" bgcolor = "black"></td>`;
      }
      if(my_board[y][x] == 2 && x != 0 && y != 0){
        line = line + `<td class="my_hit_board_element" bgcolor = "red"></td>`;
      }
      if(my_board[y][x] == 3 && x != 0 && y != 0){
        line = line + `<td class="my_missed_board_element" bgcolor = "lightblue"></td>`;
      }
      if(my_board[y][x] == 4 && x != 0 && y != 0){
        line = line + `<td class="my_sunken_board_element" bgcolor = "green"></td>`;
      }
    }
    line = line + "</tr>";
  }
  line = line + "</table>"
  return line;
}

function placebombs(bombs){
  for(i = 0; i < 20; i++){
    x = Math.random().floor * my_board[0].length;
    y = Math.random().floor * my_board.length;
    while(my_board[y][x] == 10){
      x = Math.random().floor * my_board[0].length;
      y = Math.random().floor * my_board.length;
    }
    my_board[y][x] = 10;
  }
}

function setnumbers(){
  for(y = 0; y < my_board.length; y++){
    for(x = 0; x < my_board[0].length; x++){
    }
    x = 0;
  }
}