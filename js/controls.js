'use strict'
var gWordInterval = setInterval(moveDown, 500)
// words speed
function controls(event) {
    if (event.keyCode === 37) {
        //37 = ArrowLeft
        moveLeft()
        // move left
    } else if (event.keyCode === 38) {
        //38 = ArrowUp
        rotate()
        // change position
    } else if (event.keyCode === 39) {
        //39 = ArrowRight
        moveRight()
        // move right
    } else if (event.keyCode === 40) {
        //40 = ArrowDown
        moveDown()
        // go down 
    }
}



function moveDown() {
    unDraw()
    currPos += gWidth
    draw()
    freeze()
}



function moveLeft() {
    unDraw()
    var leftEndge = curr.some(index => (currPos + index) % gWidth === 0)

    if (!leftEndge) {
        currPos -= 1
    }

    if (curr.some(index => squares[currPos + index].classList.contains('used'))) {
        currPos += 1
    }
    draw()
}



function moveRight() {
    unDraw()
    var rightEndge = curr.some(index => (currPos + index) % gWidth === gWidth - 1)
    // gWidth -1  - ending of the width


    if (!rightEndge) {
        currPos += 1
    }

    if (curr.some(index => squares[currPos + index].classList.contains('used'))) {
        currPos -= 1
    }
    draw()
}



function rotate() {
    unDraw()
    currRotation++
    // use next word rotation 
    if (currRotation === curr.length) {
        // if its equal to the last rotation :
        currRotation = 0
        // the first rotation from the array
    }
    curr = tetrisWords[randomWord][currRotation]
    // updating it...
    draw()
}



