const Cell = require('./Cell');

class AliveCell extends Cell {
    isAlive() {
        return true;
    }
}

module.exports = AliveCell;