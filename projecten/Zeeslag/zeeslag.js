let my_board = [[" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
                ["1", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["2", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["3", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["5", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["4", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["6", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["7", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["8", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["9", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["10", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
let his_board = [[" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
                ["1", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["2", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["3", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["4", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["5", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["6", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["8", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["7", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["9", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ["10", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
let turn = 1
// clock found on https://tecadmin.net/get-current-date-time-javascript/
let now = new Date();
let start_hour = now.getHours() ;
let start_minute = now.getMinutes();
let start_second =  now.getSeconds();
setInterval(new_time, 500);

function draw_my_board(){
  container = document.getElementById("my_field");
  board_html = ChangeBoard();
  container.innerHTML = board_html;
  my_board[0][0] = 1;
}
function draw_his_board(){
  container = document.getElementById("his_field");
  board_html = ChangeBoard2();
  container.innerHTML = board_html;
  his_board[0][0] = 1
}

function StartNewGame(){
  let now = new Date();
  start_hour = now.getHours() ;
  start_minute = now.getMinutes();
  start_second =  now.getSeconds();
  my_board[0][0] = 0;
  EmptyField();
  MakeMyBoats(6);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(4);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(4);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(3);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(3);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(3);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(2);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(2);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(2);
  if(my_board[0][0] == 1){
    return;
  }
  MakeMyBoats(2);
  if(my_board[0][0] == 1){
    return;
  }
  draw_my_board();
  make_field_2();
}
function make_field_2(){
his_board[0][0] = 0
  EmptyField2();
  MakeHisBoats(6);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(4);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(4);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(3);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(3);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(3);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(2);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(2);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(2);
  if(his_board[0][0] == 1){
    return;
  }
  MakeHisBoats(2);
  if(his_board[0][0] == 1){
    return;
  }
  draw_his_board();
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
function ChangeBoard2(){
  line = `<table style="float: left; margin-top: 10px">`;
  for (let y = 0; y < 11; y++){
    line = line + "<tr>";
    for (let x = 0; x < 11; x++){
      if(x == 0 && y == 0){
        line = line + `<td class="indicator" bgcolor = "gray"></td>`;
      }
      if(x == 0 && y != 0){
        line = line + `<td class="indicator" bgcolor = "gray">${his_board[y][x]}</td>`;
      }
      if(y == 0 && x != 0){
        line = line + `<td class="indicator" bgcolor = "gray">${his_board[y][x]}</td>`;
      }
      if(his_board[y][x] == 0 && x != 0 && y != 0){
        line = line + `<td class="his_empty_board_element" onclick="attack(this)" bgcolor = "white"></td>`;
      }
      if(his_board[y][x] == 1 && x != 0 && y != 0){
        line = line +  `<td class="his_boat_board_element" onclick="attack(this)" bgcolor = "white"></td>`;
      }
      if(his_board[y][x] == 2 && x != 0 && y != 0){
        line = line + `<td class="his_hit_board_element" bgcolor = "red"></td>`;
      }
      if(his_board[y][x] == 3 && x != 0 && y != 0){
        line = line + `<td class="his_missed_board_element" bgcolor = "lightblue"></td>`;
      }
      if(his_board[y][x] == 4 && x != 0 && y != 0){
        line = line + `<td class="his_sunken_board_element" bgcolor = "green"></td>`;
      }
    }
    line = line + "</tr>";
  }
  line = line + `</table>`;
  return line;
}

function EmptyField(){
  for (let x = 1; x < 11; x++){
    for (let y = 1; y < 11; y++){
      my_board[y][x] = 0;
    }
  }
  return;
}
function EmptyField2(){
  for (let x = 1; x < 11; x++){
    for (let y = 1; y < 11; y++){
      his_board[y][x] = 0;
    }
  }
  return;
}

function MakeMyBoats(aantal){
  x = (Math.floor(Math.random()*(11-aantal))+1);
  y = (Math.floor(Math.random()*(11-aantal))+1);
  NoPos = 0;
  Direction = Math.floor(Math.random()*2);

  // past niet op bord , geen boten tegen elkaar
  if(Direction == 0){
    for(let i = -1; i < aantal + 2; i++){
      while(my_board[y+1][x+i] == 1 || my_board[y][x+i] == 1 || my_board[y-1][x+i] == 1){
        x = (Math.floor(Math.random()*(11-aantal))+1);
        y = (Math.floor(Math.random()*(11-aantal))+1);
        NoPos++;
        i = -1;
        if(NoPos > 20){
          return StartNewGame();
        }
      }

    }
  }
  if(Direction == 1){
    for(let i = -1; i < aantal + 2; i++){
      while(my_board[y+i][x-1] == 1 || my_board[y+i][x+1] == 1 || my_board[y+i][x] == 1){
        x = (Math.floor(Math.random()*(11-aantal))+1);
        y = (Math.floor(Math.random()*(11-aantal))+1);
        NoPos++;
        i = -1;
        if(NoPos > 20){
          return StartNewGame();
        }
      }

    }
  }
  for(let i = 0; i < aantal; i++){
    if(Direction == 0){
      my_board[y][x+i] = 1;
    }
    if(Direction == 1){
      my_board[y+i][x] = 1;
    }
  }
  return;
}
function MakeHisBoats(aantal){
  Direction = Math.floor(Math.random()*2);
  x = (Math.floor(Math.random()*(11-aantal))+1);
  y = (Math.floor(Math.random()*(11-aantal))+1);
  NoPos = 0;
  // past niet op bord , geen boten tegen elkaar
  if(Direction == 0){
    for(let i = -1; i < aantal + 2; i++){
      while(his_board[y+1][x+i] == 1 || his_board[y][x+i] == 1 || his_board[y-1][x+i] == 1){
        x = (Math.floor(Math.random()*(11-aantal))+1);
        y = (Math.floor(Math.random()*(11-aantal))+1);
        NoPos++;
        i = -1;
        if(NoPos > 20){
          return make_field_2();
        }
      }

    }
  }
  if(Direction == 1){
    for(let i = -1; i < aantal + 2; i++){
      while(his_board[y+i][x-1] == 1 || his_board[y+i][x+1] == 1 || his_board[y+i][x] == 1){
        x = (Math.floor(Math.random()*(11-aantal))+1);
        y = (Math.floor(Math.random()*(11-aantal))+1);
        NoPos++;
        i = -1;
        if(NoPos > 20){
          return make_field_2();
        }
      }

    }
  }
  for(let i = 0; i < aantal; i++){
    if(Direction == 0){
      his_board[y][x+i] = 1;
    }
    if(Direction == 1){
      his_board[y+i][x] = 1;
    }
  }
  return;
}

function attack(location){
  let y = location.parentNode.rowIndex;
  let x = location.cellIndex;
  if(his_board[y][x] == 0){
    his_board[y][x] = 3;
  }
  if(his_board[y][x] == 1){
    his_board[y][x] = 2;
  }
  his_boat_sunk();
  draw_his_board();
  x = (Math.floor(Math.random()*10)+1);
  y = (Math.floor(Math.random()*10)+1);
  while(my_board[y][x] == 2 || my_board[y][x] == 3 || my_board[y][x] == 4){
    x = (Math.floor(Math.random()*10)+1);
    y = (Math.floor(Math.random()*10)+1);
  }
  if(my_board[y][x] == 0){
    my_board[y][x] = 3;
  }
  if(my_board[y][x] == 1){
    my_board[y][x] = 2;
  }
  my_boat_sunk();
  draw_my_board();
  EndOfGame2();
  EndOfGame();
}

function my_boat_sunk(){
  for (let x = 1;x < 12; x++){
    for (y = 1; y < 12; y++){
      if(my_board[y][x] == 2){
        i = 1;
        HorVer = 0;
        if(my_board[y][x+i] ==2){
          HorVer = 0;
          while(my_board[y][x+i] == 2){
            if (!(my_board[y][x+i] == 1 || my_board[y][x-1] == 1 || my_board[y][x-1] == 2) && (my_board[y][x+i+1] == 0 || my_board[y][x+i+1] == 3)){
              show_my_sinking(x, y, i+1, HorVer);
            }
            i++;
          }
        }
        i = 1;
        if(my_board[y+i][x] ==2){
          HorVer = 1;
          while(my_board[y+i][x] == 2){
            if (!(my_board[y+i][x] == 1 || my_board[y-1][x] == 1 || my_board[y-1][x] == 2) && (my_board[y+i+1][x] == 0 || my_board[y+i+1][x] == 3)){
              show_my_sinking(x, y, i+1, HorVer);
            }
            i++;
          }
        }
      }
    }
  }
}
function his_boat_sunk(){
  for (let x = 1;x < 12; x++){
    for (y = 1; y < 12; y++){
      if(his_board[y][x] == 2){
        i = 1;
        HorVer = 0;
        if(his_board[y][x+i] ==2){
          HorVer = 0;
          while(his_board[y][x+i] == 2){
            if (!(his_board[y][x+i] == 1 || his_board[y][x-1] == 1 || his_board[y][x-1] == 2) && (his_board[y][x+i+1] == 0 || his_board[y][x+i+1] == 3)){
              show_his_sinking(x, y, i+1, HorVer);
            }
            i++;
          }
        }
        i = 1;
        if(his_board[y+i][x] ==2){
          HorVer = 1;
          while(his_board[y+i][x] == 2){
            if (!(his_board[y+i][x] == 1 || his_board[y-1][x] == 1 || his_board[y-1][x] == 2) && (his_board[y+i+1][x] == 0 || his_board[y+i+1][x] == 3)){
              show_his_sinking(x, y, i+1, HorVer);
            }
            i++;
          }
        }
      }
    }
  }
}

function show_my_sinking(x, y, i, HorVer){
  for(let a = 0; a < i; a++){
    if(HorVer == 0){
      my_board[y][x+a] = 4;
    }
    if(HorVer == 1){
      my_board[y+a][x] = 4;
    }
  }
}
function show_his_sinking(x, y, i, HorVer){
  for(let a = 0; a < i; a++){
    if(HorVer == 0){
      his_board[y][x+a] = 4;
    }
    if(HorVer == 1){
      his_board[y+a][x] = 4;
    }
  }
}

function EndOfGame(){
  for (let x = 1;x < 11; x++){
    for (y = 1; y < 11; y++){
      if(my_board[y][x] == 1){
        return;
      }
    }
  }
  alert(`You Lose`);
  StartNewGame();
}
function EndOfGame2(){
  for (let x = 1;x < 11; x++){
    for (y = 1; y < 11; y++){
      if(his_board[y][x] == 1){
        return;
      }
    }
  }
  alert(`You Win`);
  StartNewGame();
}

window.onload = function(){
    StartNewGame();
}

function new_time(){
  direct = new Date();
  hours = direct.getHours() - start_hour;
  minutes = direct.getMinutes() - start_minute;
  seconds = direct.getSeconds() - start_second;
  if(seconds < "00"){
    seconds = seconds + 60;
    minutes = minutes - 1;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes
  }
  time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = time;
}
