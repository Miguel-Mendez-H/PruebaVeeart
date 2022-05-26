import { landdersAndSnakes } from "./board.js";
import { playersOnGame } from "./players.js";

let finalPosition = 0;

let players = playersOnGame;
let playerPositionOnBoard = 0;


//Funcion que nos ayuda con la determinacion de los turnos y el ganador del juego
// mientras la posicion de los players sea menos a el tamaño del tablero sigue jugando
function turningGame(table) {
  
  while (players.player1.position !== table.length && players.player2.position !== table.length){
    if (players.player1.turn === true) {
      console.log('Turno del jugador 1')
      players.player1.position = makeMovement(table, players.player1.position);
      players.player1.position === table.length ? console.log("Ganaste jugador 1"): console.log("Sigue jugador 2")
      players.player1.turn = !players.player1.turn;
      console.log("----------------------------------------------")
    } else {
      console.log('Turno del jugador 2')
      players.player2.position = makeMovement(table, players.player2.position);
      players.player2.position === table.length ? console.log("Ganaste jugador 2"): console.log("Sigue jugador 1")
      players.player1.turn = !players.player1.turn;
      console.log("----------------------------------------------")
    }
    
  }
}

// La funcion movimiento genera cada movimiendo, desde el aumento del rolldice
// hasta la verificacion del movimiento si cae en una ladder o snake llamando a la clase laddersAndSnakes


function makeMovement(table, initialPosition) {
  if (initialPosition !== table.length) {
    let result = rollDice();
    console.log(`Dado arroja ${result}`);
    finalPosition = initialPosition + result;
    console.log(`Jugador avanza a cuadro ${finalPosition}`);
    playerPositionOnBoard = landdersAndSnakes(finalPosition);
    if (playerPositionOnBoard > table.length) {
      let cellToBeReturned = (playerPositionOnBoard - table.length) * 2;
      initialPosition = playerPositionOnBoard - cellToBeReturned;
      console.log(
        `Te pasaste del tamaño del tablero te devuelves ${cellToBeReturned / 2} desde la casilla ${table.length}`
      );
    } else {
      initialPosition = playerPositionOnBoard;
    }
  }
  return initialPosition;
}

const rollDice = () => Math.round(Math.random() * (6 - 1) + 1);

export {turningGame};
