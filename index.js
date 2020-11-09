var
E = "",
B = "X",
W = "O",
N = "N"

var player1 = {
	color: B
}

var board = [

  [ E, E, E, E, E ],
  [ E, B, W, B, E ],
  [ E, W, N, W, E ],
  [ E, B, W, B, E ],
  [ E, E, E, E, E ]

];

var selection = null;

var options = [];

var movePiece = function(pieceRow, pieceCol, destRow, destCol){

	var position = board[pieceRow][pieceCol];
  var destination = board[destRow][destCol];

  if (position){
    if (position === player1.color || position === N){
    	if (destination === E){
      
        var verticalRange = destRow - pieceRow;
        var horizontalRange = destCol - pieceCol;

        if (Math.abs(verticalRange) > 2 || Math.abs(horizontalRange) > 2){

          console.log("That destination is out of range");

        } else {

          if (Math.abs(horizontalRange) <= 1 && Math.abs(verticalRange) <= 1){
            console.log("one square away. You can move here!");
              board[destRow][destCol] = position
              board[pieceRow][pieceCol] = E;

          } else {

            var h = horizontalRange / 2;
            var v = verticalRange / 2;

            if (h % 1 != 0 || v % 1 != 0){
              console.log("you can only skip other pieces on a true diagonal")
            } else {
              var intermediateSquare = board[pieceRow + v][pieceCol + h];

              if (intermediateSquare != E ){
                  console.log("Two squares away. You may move here! (skip)");
                  board[destRow][destCol] = position
                  board[pieceRow][pieceCol] = E;
              } else {
                console.log("You cannot move here because the square in between is empty.")
              }
              
            }

          }
          
        }
        
			} else {
      	console.log("You can't move to that destination because there is a piece already there.")
      }
    } else {
    	console.log("That is not a piece you can move");
    }
  } else {
    console.log("piece is not defined");
  }
}

//movePiece(2, 2, 0, 0);



var renderBoard = function(){

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++){

      const item = document.createElement('div');
      item.className = "sq";
      item.id = "sq" + i + j;
      item.innerHTML = board[i][j];

      let row = i;
      let col = j;

      item.addEventListener("click", function(){

        item.style.background = "rgb(80, 82, 98)";

        if (!selection){
          console.log(board);
          selection = [row, col];
        } else {

          movePiece(selection[0], selection[1], row, col);
          selection = null;
          document.getElementById("grid-container").innerHTML = "";
          renderBoard();

        }

      })

      document.getElementById("grid-container").appendChild(item);
    }
  }
}

renderBoard();
