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

// Genero el tablero de acuerdo a un size establecido por el usuario
function delimitTable(size) {
  const tablero = [];
  for (let i = 0; i < size; i++) {
    tablero.push(i);
  }
  return tablero;
}

// la funcion recibe la posicion del jugador despues de sumar el valor del dado
//mas la posicion actual y verifica si cae en una ladder o una snake
function landdersAndSnakes(finalPosition) {
  if (ladders[finalPosition]) {
    playerPosition = finalPosition + ladders[finalPosition];
    console.log(`Jugador usa escalera y sube a ${playerPosition}`);
  } else if (snakes[finalPosition]) {
    playerPosition = finalPosition - snakes[finalPosition];
    console.log(`Jugador desciende al cuadro ${playerPosition}`);
  } else {
    playerPosition = finalPosition;
  }

  return playerPosition;
}



export {delimitTable, landdersAndSnakes};
