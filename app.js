document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const score = document.querySelector('#score')
    const startButton = document.querySelector('#start-button')
    const width = 10

    // Tetriminoes

    const jTetrimino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2, width*2+1],
        [0, width, width+1, width+2]
    ]

    const iTetrimino = [
        [width, width+1, width+2, width+3],
        [2, width+2, width*2+2, width*3+2],
        [width*2, width*2+1, width*2+2, width*2+3],
        [1, width+1, width*2+1, width*3+1],
    ]

    const oTetrimino = [
        [1,2, width+1, width+2],
        [1,2, width+1, width+2],
        [1,2, width+1, width+2],
        [1,2, width+1, width+2],
    ]

    const lTetrimino = [
        [width, width+1, width+2, 2],
        [1, width+1, width*2+1, width*2+2],
        [width, width+1, width+2, width*2],
        [0, 1, width+1, width*2+1],
    ]

    const tTetrimino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]

    const sTetrimino = [
        [1,2,width,width+1],
        [1, width+1, width+2, width*2+2],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1]
    ]

    const zTetrimino = [
        [0,1,width+1,width+2],
        [2, width+1, width+2, width*2+1],
        [width, width+1, width*2+1, width*2+2],
        [1, width, width+1, width*2]
    ]

    const tetriminoes = [lTetrimino, zTetrimino, tTetrimino, oTetrimino, iTetrimino]
    let random = Math.floor(Math.random()*tetriminoes.length)
    let currentPosition = 0
    let currentRotation = 0
    current = tetriminoes[random][currentRotation]

    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    draw()

})