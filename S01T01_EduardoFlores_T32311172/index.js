var colors = require("colors");

function ImpresionNotas(nota) {
  let color = "";
  if (nota <= 65) {
    color = "red";
  } else if (nota > 65 && nota <= 80) {
    color = "yellow";
  } else {
    color = "green";
  }
  console.log(nota.toString()[color]);
}

ImpresionNotas(55);
ImpresionNotas(75);
ImpresionNotas(88);
