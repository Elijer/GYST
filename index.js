var
E = "Empty",
B = "Black",
W = "White",
N = "Neutral"

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

var options = [];

var movePiece = function(pieceRow, pieceCol, destRow, destCol){

	var position = board[pieceRow][pieceCol];
  var destination = board[destRow][destCol];

  if (position){
    if (position === player1.color || position === N){
    	if (destination === E){
      
        var verticalRange = destRow - pieceRow;

        if (Math.abs(verticalRange) > 2){
          console.log("That destination is out of range");
        } else {

          var horizontalRange = destCol - pieceCol;

          if (Math.abs(horizontalRange) > 2){

            console.log("That destination is out of range");

          } else {

            if (Math.abs(horizontalRange) === 1){
              console.log("one square away. You can move here!");
                board[destRow][destCol] = position
                board[pieceRow][pieceCol] = E;

            } else {
            
            	var h = horizontalRange / 2;
              var v = verticalRange / 2;
              
              var intermediateSquare = board[pieceRow + h][pieceCol + v];
              
              if (intermediateSquare === B || intermediateSquare === N || intermediateSquare === W){
              	console.log("You may move here!");
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
  console.log(board);
}

console.log(board);
movePiece(2, 2, 0, 0);