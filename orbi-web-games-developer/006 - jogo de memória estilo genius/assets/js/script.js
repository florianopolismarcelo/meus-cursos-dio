let order = []
let clickedOrder = []
let score = 0

//0 - verde
//01 - vermelho
//02 - amarelo
//03 - azul

const blue = document.querySelector(".blue")
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const yellow = document.querySelector(".yellow")

//cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

//acende a próxima cor
let lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add("selected")
  }, number - 250)
  setTimeout(() => {
    element.classList.remove("selected")
  })
}
