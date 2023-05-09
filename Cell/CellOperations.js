const AliveCell = require("./AliveCell")
const DeadCell = require("./DeadCell")

const cellFunctionsMapping = {
    "2": (isAlive) => isAlive,
    "3": (isAlive) => true
}

const getFunctionFromMapping = (numberOfAliveNeighbours) => {
    if (cellFunctionsMapping[numberOfAliveNeighbours]) {
        return cellFunctionsMapping[numberOfAliveNeighbours]
    }

    return (isAlive) => false
}

exports.nextCell = (isAlive, numberOfAliveNeighbours) => {
    if (numberOfAliveNeighbours < 0 || numberOfAliveNeighbours > 8) {
        throw new Error("Number of neighbours of a cell can only be between 0 and 8");
    }

    return getFunctionFromMapping(numberOfAliveNeighbours)(isAlive) ? new AliveCell() : new DeadCell()
}