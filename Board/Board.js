const BoardConverter = require('../utils/BoardConverter')
const NeighbourStatusFinder = require('../utils/NeighbourStatusFinder')

class Board {
    #board;
    #rows;
    #cols;

    constructor(board) {
        if (!board) {
            throw new Error("Initialized with an empty board");
        }

        if (board.length === 0 || board[0].length === 0) {
            throw new Error("Invalid board size");
        }

        this.#rows = board.length;
        this.#cols = board[0].length;

        this.#board = BoardConverter.convertCellStatusBoardToCellBoard(board);
    }

    next() {
        const tempNewBoard = [];

        for (let row = 0; row < this.#rows; row++) {
            const tempRow = []
            for (let col = 0; col < this.#cols; col++) {
                const numberOfAliveNeighbours = NeighbourStatusFinder.getNumberOfAliveNeighbours(row, col, this.#board);
                tempRow.push(this.#board[row][col].next(numberOfAliveNeighbours))
            }
            tempNewBoard.push(tempRow)
        }

        this.#board = tempNewBoard;

        return BoardConverter.convertCellBoardToCellStatusBoard(this.#board);
    }
}

module.exports = Board;