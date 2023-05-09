const Board = require('../Board/Board');
const { FILLED, EMPTY } = require('../Cell/CellStatus');

class Game {
    #board

    startWithBoard(starterBoard) {
        if (this.#board) {
            throw new Error("Game has already been started with a board");
        }

        if (!starterBoard) {
            throw new Error("Initialized with an empty board");
        }

        if (starterBoard.length === 0 || starterBoard[0].length === 0) {
            throw new Error("Invalid board size");
        }

        this.#board = new Board(starterBoard);
    }

    startWithRandomBoardOfSize(rows, cols) {
        if (this.#board) {
            throw new Error("Game has already been started with a board");
        }

        if (rows < 0 || cols < 0) {
            throw new Error("Dimensions of the board should be valid");
        }

        const starterBoard = [];
        const characters = [EMPTY, FILLED];

        for (let row = 0; row < rows; row++) {
            const tempRow = []
            for (let col = 0; col < cols; col++) {
               tempRow.push(characters[Math.floor(Math.random() * 2)]);
            }
            starterBoard.push(tempRow)
        }

        this.#board = new Board(starterBoard);
    }

    tick() {
        if (!this.#board) {
            throw new Error("Game has not been initialized with a board yet");
        }

        return this.#board.next();
    }

    tick(n) {
        if (!this.#board) {
            throw new Error("Game has not been initialized with a board yet");
        }

        for (let i = 0; i < n - 1; i++) {
            this.#board.next();
        }

        return this.#board.next();
    }

    stop() {
        if (!this.#board) {
            throw new Error("There is no game currently being run that could be stopped");
        }

        this.#board = null;
    }
}

module.exports = Game;