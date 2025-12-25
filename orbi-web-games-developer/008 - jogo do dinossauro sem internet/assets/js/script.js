const dino = document.querySelector(".dino")
const background = document.querySelector(".background") // Selecionar o container

let isJumping = false
let isGameOver = false // Declarar estado inicial do jogo
let position = 0

// Adiciona evento para detectar quando a tecla de espaço é pressionada
function handleKeyUp(event) {
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
      clearInterval(upInterval)

      // Descendo
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

// função cria cactos
function createCactus() {
  if (isGameOver) return // Para a criação se o jogo acabou

  const cactus = document.createElement("div")
  let cactusPosition = 1000
  let randomTime = Math.random() * 8000

  cactus.classList.add("cactus")
  background.appendChild(cactus)
  cactus.style.left = cactusPosition + "px"

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftTimer)
      background.removeChild(cactus)
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // Lógica de Colisão
      clearInterval(leftTimer)
      isGameOver = true
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
    } else {
      cactusPosition -= 9
      cactus.style.left = cactusPosition + "px"
    }
  }, 20)

  // Gera o próximo cacto recursivamente
  setTimeout(createCactus, randomTime)
}
// Inicia o jogo
createCactus()
document.addEventListener("keyup", handleKeyUp)
