'use strict';

var shortid = require('shortid');
var sudoku = require('sudoku');

module.exports = {
    create
};

function create() {
    //TODO change to x, y, value representation of cell
    var puzzle = sudoku.makepuzzle().map((cell) => cell ? cell : -1);
    puzzle.forEach(function (elem, index) {
        puzzle[index] = {x: Math.floor(index / 9), y: index % 9, value: elem};
    });

    return {
        id: shortid.generate(),
        covers: puzzle,
        state: 'in-progress'
    };
}
