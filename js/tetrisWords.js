'use strict'

// the shapes with its different rotations , since they will be rotating 4 times , there are 4 possible rotations in each array
// LETTER Z
var tetrisWordL = [
    [1, gWidth + 1, gWidth * 2 + 1, 2],
    [gWidth, gWidth + 1, gWidth + 2, gWidth * 2 + 2],
    [1, gWidth + 1, gWidth * 2 + 1, gWidth * 2],
    [gWidth, gWidth * 2, gWidth * 2 + 1, gWidth * 2 + 2]
]



// LETTER Z
var tetrisWordZ = [
    [0, gWidth, gWidth + 1, gWidth * 2 + 1],
    [gWidth + 1, gWidth + 2, gWidth * 2, gWidth * 2 + 1],
    [0, gWidth, gWidth + 1, gWidth * 2 + 1],
    [gWidth + 1, gWidth + 2, gWidth * 2, gWidth * 2 + 1]
]



// LETTER T
var tetrisWordT = [
    [1, gWidth, gWidth + 1, gWidth + 2],
    [1, gWidth + 1, gWidth + 2, gWidth * 2 + 1],
    [gWidth, gWidth + 1, gWidth + 2, gWidth * 2 + 1],
    [1, gWidth, gWidth + 1, gWidth * 2 + 1]
]



// LETTER 0
var tetrisWordO = [
    [0, 1, gWidth, gWidth + 1],
    [0, 1, gWidth, gWidth + 1],
    [0, 1, gWidth, gWidth + 1],
    [0, 1, gWidth, gWidth + 1]
]



// LETTER I
var tetrisWordI = [
    [1, gWidth + 1, gWidth * 2 + 1, gWidth * 3 + 1],
    [gWidth, gWidth + 1, gWidth + 2, gWidth + 3],
    [1, gWidth + 1, gWidth * 2 + 1, gWidth * 3 + 1],
    [gWidth, gWidth + 1, gWidth + 2, gWidth + 3]
]

// naming all of the tetrises together in one array to have to later randomed
var tetrisWords = [tetrisWordL, tetrisWordZ, tetrisWordT, tetrisWordO, tetrisWordI]

var randomWord = Math.floor(Math.random() * tetrisWords.length)
// gets random word shape
// console.log(randomWord);
var curr = tetrisWords[randomWord][currRotation]
// the randomed word and its current rotation
// console.log(tetrisWords[0][0]);