const CellOperations = require('../Cell/CellOperations')
const Board = require('../Board/Board');
const { EMPTY, FILLED } = require('../Cell/CellStatus');

describe('board object should get generated', () => {
    test('correctly', () => {
        const board = [
            [ EMPTY, EMPTY, FILLED ],
            [ EMPTY, FILLED, EMPTY ],
            [ FILLED, FILLED, EMPTY ]
        ]

        expect(() => new Board(board)).not.toThrow();
    })
})

describe('board object creation should throw an error if', () => {
    test('trying to pass a null board', () => {
        expect(() => new Board(null)).toThrow(/^Initialized with an empty board$/)
    })

    test('trying to pass invalid size board', () => {
        expect(() => new Board([])).toThrow(/^Invalid board size$/)
    })

    test('trying to pass a board with null cells', () => {
        expect(() => new Board([[null, null]])).toThrow(/^All cells of the board must be non-null$/)
    })
})

describe('should generate next board', () => {
    test('correctly', () => {
        const board = [
            [ EMPTY, EMPTY, FILLED ],
            [ EMPTY, FILLED, EMPTY ],
            [ FILLED, FILLED, EMPTY ]
        ]

        const expectedBoard = [
            [ EMPTY, EMPTY, EMPTY ],
            [ FILLED, FILLED, FILLED ],
            [ FILLED, FILLED, EMPTY ]
        ]

        expect(new Board(board).next()).toStrictEqual(expectedBoard);
    })
})