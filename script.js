// -------- SETUP CODE ----------
const canvas = document.createElement('canvas')
const MAX_WIDTH = document.body.clientWidth
const MAX_HEIGHT = document.body.clientHeight

canvas.width = MAX_WIDTH
canvas.height = MAX_HEIGHT
document.body.appendChild(canvas)

const context = canvas.getContext('2d')
// ------------------------------

context.fillStyle = 'white'
context.fillRect(0, 0, MAX_WIDTH, MAX_HEIGHT)

const snow = [
    [ 20, 300],
    [ 20, 300],
    [ 20, 300],
    [ 20, 300],
    [ 20, 300],
    [ 20, 300],
    [ 20, 300],
    [ 20, 300],
]

// const treeCoordinates = [
//     [ 100, 200],
//     [ 300, 150],
//     [ 200, 100],
// ]

// rita ut en grön triangel
function drawBranch(x, y, size) {
    context.fillStyle = 'green'
    context.beginPath()
    context.moveTo(x, y)

    context.lineTo(x + size, y)
    context.lineTo(x, y - size)
    context.lineTo(x - size, y)
    context.lineTo(x, y)

    context.fill()
    context.closePath()

    context.fillStyle = 'red'
    context.beginPath()
    context.ellipse(x + 50, y, 5, 5, 0, 0, 2 * Math.PI)
    context.closePath()
    context.fill()

    context.fillStyle = 'red'
    context.beginPath()
    context.ellipse(x - 50, y, 5, 5, 0, 0, 2 * Math.PI)
    context.closePath()
    context.fill()
}

function drawTrunk(x, y) {
    context.fillStyle = 'brown';
    context.fillRect(x - 5, y + 60, 10, 20);
}

function drawTree(x, y) {
    drawBranch(x, y, 50)
    drawBranch(x, y + 30, 60)
    drawBranch(x, y + 60, 70)
    drawTrunk(x, y)
}

let y = 0
function drawSky() {
    context.fillStyle = `hsl(220, 100%, 10%)`
    context.fillRect(0, 0, MAX_WIDTH, MAX_HEIGHT / 2)

    drawSnowflake(50, y)
    drawSnowflake(100, y)
    drawSnowflake(150, y)
}

function drawSnowflake(x, y) {
    context.fillStyle = 'white'
    context.beginPath()
    context.ellipse(x, y, 3, 3, 0, 0, 2 * Math.PI)
    context.closePath()
    context.fill()
}

setInterval(() => {
    drawSky()

    drawTree(150, 400)
    drawTree(250, 350)
    drawTree(400, 450)
    drawTree(50, 400)
    drawTree(250, 550)
    drawTree(500, 350)
}, 5)
