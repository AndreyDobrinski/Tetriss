'use strict'


var grid = document.querySelector('.grid')
var squares = Array.from(document.querySelectorAll('.grid div'))
var gWidth = 10
// change it later to 14
var gScore = 0
var scoreDisplay = document.querySelector('.score')
var timeDisplay = document.querySelector('.time')
var currPos = 4
var currRotation = 0
var gCountTime = 0
var gInterval;
gInterval = setInterval(setTimer,1000)


function draw() {
    curr.forEach(index => {
        squares[currPos + index].classList.add('tetrisWords')
    })
}
// drawing the words



function unDraw() {
    curr.forEach(index => {
        squares[currPos + index].classList.remove('tetrisWords')
    })
}
// removing the words for next word



function freeze() {
    if (curr.some(index => squares[currPos + index + gWidth].classList.contains('used'))) {
        // stop at the end of the board
        curr.forEach(index => squares[currPos + index].classList.add('used'))
        // stop at the start of the word
        randomWord = Math.floor(Math.random() * tetrisWords.length)
        curr = tetrisWords[randomWord][currRotation]
        // starting a new word with random pos

        currPos = 4
        // new settings
        draw()
        // drawing it again
        gameScore()
        gameOver()

    }
}



// updating the score and removing the full colored line and adding a new line
function gameScore() {
    for (var i = 0; i < 199; i += gWidth) {
        var row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9]
        if (row.every(index => squares[index].classList.contains('used'))) {
            gScore += 100
            scoreDisplay.innerHTML = gScore
            row.forEach(index => {
                squares[index].classList.remove('used')
                // remove the full colored line
                squares[index].classList.remove('tetrisWords')
                // to remove them from above bug
            })
            var removedSquares = squares.splice(i, gWidth)
            squares = removedSquares.concat(squares)
            squares.forEach(cell => grid.appendChild(cell))
        }
    }
}



// when the word reaches the last width
function gameOver() {
    if (curr.some(index => squares[currPos + index].classList.contains('used'))) {
        // alert('game over')
        var modal = document.querySelector('.modal')
        modal.style.display = 'block'
        clearInterval(gWordInterval)
        clearInterval(gInterval)
        
    }
}



// reload page
function reloadPage(){
   window.location.reload();
}



// timer
function setTimer() {
    gCountTime += 1
    timeDisplay.innerHTML =  gCountTime
}