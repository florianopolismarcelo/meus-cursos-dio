const dino = document.querySelector(".dino")
let isJumping = false
let position = 0 // É necessário declarar a variável de posição

// Adiciona evento para detectar quando a tecla de espaço é pressionada
function handleKeyUp(event) {
  // event.keyCode está depreciado, use event.code === "Space"
  if (event.code === "Space") {
    if (!isJumping) {
      jump()
    }
  }
}
// Função para fazer o dinossauro pular
function jump() {
  isJumping = true

  let upInterval = setInterval(() => {
    if (position >= 150) {
      // Para de subir e começa a descer
      clearInterval(upInterval)

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval)
          isJumping = false
        } else {
          position -= 20
          dino.style.bottom = position + "px"
        }
      }, 20)
    } else {
      // Subindo
      position += 20
      dino.style.bottom = position + "px"
    }
  }, 20)
}

// Adicione o ouvinte de evento para o código funcionar
document.addEventListener("keyup", handleKeyUp)
