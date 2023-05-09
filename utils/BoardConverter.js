const AliveCell = require("../Cell/AliveCell");
const { FILLED, EMPTY } = require("../Cell/CellStatus");
const DeadCell = require("../Cell/DeadCell");

exports.convertCellBoardToCellStatusBoard = (board) => {
    if (!board) {
        throw new Error("Initialized with an empty board");
    }

    if (board.length === 0 || board[0].length === 0) {
        throw new Error("Invalid board size");
    }

    const rows = board.length;
    const cols = board[0].length;

    const resBoard = [];

    for (let row = 0; row < rows; row++) {
        const tempRow = []
        for (let col = 0; col < cols; col++) {
            if (!board[row][col]) {
                throw new Error("All cells of the board must be non-null");
            }

            tempRow.push(board[row][col].isAlive() ? FILLED : EMPTY);
        }
        resBoard.push(tempRow)
    }

    return resBoard;
}

exports.convertCellStatusBoardToCellBoard = (board) => {
    if (!board) {
        throw new Error("Initialized with an empty board");
    }

    if (board.length === 0 || board[0].length === 0) {
        throw new Error("Invalid board size");
    }

    const rows = board.length;
    const cols = board[0].length;

    const resBoard = [];

    for (let row = 0; row < rows; row++) {
        const tempRow = []
        for (let col = 0; col < cols; col++) {
            if (!board[row][col]) {
                throw new Error("All cells of the board must be non-null");
            }

            tempRow.push(board[row][col] === FILLED ? new AliveCell() : new DeadCell());
        }
        resBoard.push(tempRow)
    }

    return resBoard;
}