const board = document.querySelector('#board')
const colors = ['#EB4C42FF', '#318CE7FF', '#50C878FF', '#20B2AAFF', '#F4CA16FF', '#CC397BFF', '#F07427FF', '#9457EBFF']
const SQUARES_NUMBER = 380

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', setColor)
   
   square.addEventListener('mouseleave', removeColor) 

   board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}