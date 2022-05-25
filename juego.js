import delimitTable from "./tablero.js";
import makeMoviment from "./moviment.js";

function lestPlay() {
  let size = 25;
  let table = delimitTable(size);
  makeMoviment(table);
}

lestPlay();
