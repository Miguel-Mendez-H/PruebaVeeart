import {landdersAndSnakes} from './laddersAndSnakes.js'

let initialPosition = 0;
let finalPosition = 0;
let playerPositionOnBoard = 0

function makeMoviment(table) {

  while (finalPosition < table.length){
    let result = rollDice()
    console.log(`Dado arroja ${result}`)
    finalPosition = initialPosition + result
    console.log(`Jugador avanza a cuadro ${finalPosition}`)
    playerPositionOnBoard = landdersAndSnakes(finalPosition)
    playerPositionOnBoard >= table.length ? console.log('Ganaste!'): initialPosition =  playerPositionOnBoard
  }
}

const rollDice = () => Math.round(Math.random()*(6-1)+1)


export default makeMoviment