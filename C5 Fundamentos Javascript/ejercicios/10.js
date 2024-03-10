function esFechaValida(fecha) {
  return fecha instanceof Date && !isNaN(fecha.getTime());
}



module.exports = esFechaValida;