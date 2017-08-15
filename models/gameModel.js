'use strict';

var repository = require('./repository.js');
var factory = require('./logic/factory.js');

module.exports = {
    all,
    get,
    create,
    remove
};

function all() {
    return repository.
    getIds().
    map(id => repository.loadMin(id));
}

function get(id) {
    return repository.loadMin(id);
}

function create() {
    var game = factory.create();

    game = repository.save(game);
    return repository.loadMin(game.id);
}

function remove(id) {
    var game = repository.loadMin(id);
    repository.remove(id);
    return game;
}
