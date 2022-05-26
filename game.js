import { delimitTable } from "./board.js";
import { turningGame } from "./movement.js";

function lestPlay() {
  let size = 25;
  let table = delimitTable(size);
  turningGame(table);
}

lestPlay();
