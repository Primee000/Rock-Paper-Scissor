function gameMove() {

 const anyNum = Math.floor(Math.random()*3);
let comMove = '';
if (anyNum === 0) {
  comMove = 'Rock';
 } else if (anyNum === 1 ) {
   comMove = 'Paper';
 }else if (anyNum === 2) {
  comMove = 'Scissor';
 }

return comMove;
}



function clickResult(playerPick) {
comMove = gameMove();
 let result = '';
  if (playerPick === 'Rock') {
    
    if (comMove === 'Rock') {
   result = 'TIE.' ; 
    }else if (comMove === 'Paper') {
      result = 'YOU LOSE.';
    }else if (comMove === 'Scissor') {
     result = 'YOU WIN' ;
      
    }
}
   else if (playerPick === 'Paper') {
   if (comMove === 'Rock') {
   result = 'YOU WIN.' ; 
    }else if (comMove === 'Paper') {
      result = 'TIE.';
    }else if (comMove === 'Scissor') {
     result = 'YOU LOSE' ;
      
    }  
   }
  else if (playerPick === 'Scissor') {if (comMove === 'Rock') {
   result ='YOU LOSE.' ; 
    }else if (comMove === 'Paper') {
      result = 'YOU WIN.';
    }else if (comMove === 'Scissor') {
     result = 'TIE.' ;
      
    }}
  alert(`You pick ${playerPick}\nComputer pick ${comMove}\n ${result}`);
}