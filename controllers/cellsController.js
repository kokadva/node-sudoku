'use strict';

var model = require('../models/cellsModel.js');

module.exports = {
    getAll,
    getCell,
    putNumber,
};


function getAll(req, res, next) {
    var cells = model.getAll(req.params.id);
    if (cells) {
        res.status(200).json(cells);
    } else {
        res.status(404).end();
    }
}

function getCell(req, res, next) {
    var cell = model.getCell(req.params.id, req.params.x, req.params.y);
    if (cell) {
        res.status(200).json(cell);
    } else {
        res.status(404).end();
    }
}

function putNumber(req, res, next) {
    var cell = model.putNumber(req.params.id, req.params.x, req.params.y, req.params.number);
    if (cell) {
        res.status(200).json(cell);
    } else {
        res.status(404).end();
    }
}
