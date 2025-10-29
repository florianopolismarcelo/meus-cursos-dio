var jogador = null

function escolherQuadrado(id) {
  
  var quadrado = document.getElementById(id)

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000';
}