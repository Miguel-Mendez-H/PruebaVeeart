
// Se crean objetos para las ladders y snakes con el fin de que se puedan aumentar de ser necesario
let ladders = {
  3: 8,
  6: 11,
  9: 9,
  10: 2,
};

let snakes = {
  14: 10,
  19: 11,
  22: 2,
  24: 8,
};

let playerPosition = 0;

// la funcion recibe la posicion del jugador despues de sumar el valor del dado
//mas la posicion actual y verifica si cae en una ladder o una snake
export function landdersAndSnakes(finalPosition) {
  if (ladders.hasOwnProperty(finalPosition)) {
    playerPosition = finalPosition + ladders[finalPosition];
    console.log(`Jugador usa escalera y sube a ${playerPosition}`);
  } else if (snakes.hasOwnProperty(finalPosition)) {
    playerPosition = finalPosition - snakes[finalPosition];
    console.log(`Jugador desciende al cuadro ${playerPosition}`);
  } else {
    playerPosition = finalPosition;
  }

  return playerPosition;
}
