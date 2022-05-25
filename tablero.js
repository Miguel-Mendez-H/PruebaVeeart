
// Genero el tablero de acuerdo a un size establecido por el usuario
function delimitTable(size) {
  const tablero = [];
  for (let i = 0; i < size; i++) {
    tablero.push(i);
  }
  return tablero;
}

export default delimitTable;
