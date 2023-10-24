const emojis = [
  "🐸",
  "🐸",
  "🐼",
  "🐼",
  "🐱",
  "🐱",
  "🐶",
  "🐶",
  "🐵",
  "🐵",
  "🐰",
  "🐰",
  "🦊",
  "🦊",
  "🦝",
  "🦝",
]

let openCards = []

let tentativas = 0

let tentativasTexto = document.querySelector(".tentativas")

const gameOver = document.querySelector(".modal-wrapper")

const gameOverMsg = document.querySelector(".game-over-msg")

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div")
  box.className = "item"
  box.innerHTML = shuffleEmojis[i]
  box.onclick = handleClick
  document.querySelector(".game").appendChild(box)
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen")
    openCards.push(this)
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500)
  }
  console.log(openCards)
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch")
    openCards[1].classList.add("boxMatch")
    tentativas++
    tentativasTexto.textContent = tentativas
  } else {
    openCards[0].classList.remove("boxOpen")
    openCards[1].classList.remove("boxOpen")
    tentativas++
    tentativasTexto.textContent = tentativas
  }

  openCards = []

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    gameOverMsg.textContent = `${tentativas} tentativas`
    gameOver.classList.add("open")
  }
}
