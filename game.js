import {delimitTable} from "./board.js";
import makeMovement from "./movement.js";

function lestPlay() {
  let size = 25;
  let table = delimitTable(size);
  makeMovement(table);
}

lestPlay();
