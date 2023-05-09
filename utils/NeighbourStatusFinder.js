exports.getNumberOfAliveNeighbours = (row, col, board) => {
    if (!board) {
        throw new Error("Initialized with an empty board");
    }

    if (board.length === 0 || board[0]?.length === 0) {
        throw new Error("Invalid board size");
    }

    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        throw new Error("Coordinates of the cell are out of bounds of the board size");
    }

    const xCoordinatesForNeighbours = [ -1, 0, 1, -1, 1, -1, 0, 1 ];
    const yCoordinatesForNeighbours = [ 1, 1, 1, 0, 0, -1, -1, -1 ];

    let count = 0;

    for (let k = 0; k < 8; k++) {
        const xPos = row + xCoordinatesForNeighbours[k];
        const yPos = col + yCoordinatesForNeighbours[k];

        if (xPos < 0 || yPos < 0 || xPos >= board.length || yPos >= board[0].length) {
            continue;
        }

        if (!board[xPos][yPos]) {
            throw new Error("All cells of the board must be non-null");
        }

        if (board[xPos][yPos].isAlive()) {
            count++;
        }
    }

    return count;
}