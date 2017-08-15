'use strict';

var repository = require('./repository.js');

module.exports = {
    getAll,
    getCell,
    putNumber,
};

function getAll(id) {
    var field = repository.load(id);
    if (!field) {
        return;
    }
    return field['covers'];
}

function getCell(id, x, y) {
    var cell = toCell(id, x, y);
    if (!cell) {
        return;
    }
    return cell;
}

function putNumber(id, x, y, number) {
    var game = repository.load(id);
    game['covers'][parseInt(x * 9) + parseInt(y)]['value'] = number;
    // repository.save(game);
    return getCell(id, x, y);
}

function toCell(id, x, y) {
    var game = repository.load(id);
    if (!game) {
        return;
    }
    var cell = game['covers'][parseInt(x * 9) + parseInt(y)];
    return cell;
}