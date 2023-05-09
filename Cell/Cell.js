const CellOperations = require('./CellOperations')

class Cell {
    isAlive() {

    }

    next(numberOfAliveNeighbours) {
        if (numberOfAliveNeighbours < 0 || numberOfAliveNeighbours > 8) {
            throw new Error("Number of neighbours of a cell can only be between 0 and 8")
        }

        return CellOperations.nextCell(this.isAlive(), numberOfAliveNeighbours)
    }
}

module.exports = Cell;