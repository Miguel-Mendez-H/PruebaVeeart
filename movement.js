import { landdersAndSnakes } from "./board.js";

let initialPosition = 0;
let finalPosition = 0;
let playerPositionOnBoard = 0;


// La funcion movimiento genera cada movimiendo, desde el aumento del rolldice
// hasta la verificacion del movimiento si cae en una ladder o snake llamando a la clase laddersAndSnakes
function makeMovement(table) {
  while (finalPosition < table.length) {
    let result = rollDice();
    console.log(`Dado arroja ${result}`);
    finalPosition = initialPosition + result;
    console.log(`Jugador avanza a cuadro ${finalPosition}`);
    playerPositionOnBoard = landdersAndSnakes(finalPosition);
    playerPositionOnBoard >= table.length
      ? console.log("Ganaste!")
      : (initialPosition = playerPositionOnBoard);
  }
}

const rollDice = () => Math.round(Math.random() * (6 - 1) + 1);

export default makeMovement;
