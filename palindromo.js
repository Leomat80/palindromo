function palindromo(texto) {
  // Eliminar espacios en blanco y convertir a minúsculas
  texto = texto.replace(/\s/g, "").toLowerCase();

  // Invertir la cadena de texto
  const textoInvertido = texto.split("").reverse().join("");

  // Comparar la cadena original con la invertida
  return texto === textoInvertido;
}

// // Ejemplos de uso
// const texto1 = "anita lava la tina";
// const texto2 = "la tele letal";

// console.log(palindromo(texto1)); // true
// console.log(palindromo(texto2)); // true


function verificarPalindromo() {
  const texto = document.getElementById("texto").value;
  const resultado = document.getElementById("resultado");

  if (palindromo(texto)) {
    resultado.innerHTML = `<b>${texto}</b> es un palíndromo`;
  } else {
    resultado.innerHTML = `<b>${texto}</b> no es un palíndromo`;
  }
}