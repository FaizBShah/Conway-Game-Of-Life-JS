const Cell = require('./Cell');

class DeadCell extends Cell {
    isAlive() {
        return false;
    }
}

module.exports = DeadCell;