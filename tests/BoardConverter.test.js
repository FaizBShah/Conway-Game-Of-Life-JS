const CellOperations = require('../Cell/CellOperations')
const AliveCell = require('../Cell/AliveCell')
const DeadCell = require('../Cell/DeadCell')
const { convertCellBoardToCellStatusBoard, convertCellStatusBoardToCellBoard } = require('../utils/BoardConverter')
const { EMPTY, FILLED } = require('../Cell/CellStatus')

describe('should convert', () => {
    test('cell board to cell status board', () => {
        const board = [
            [ new DeadCell(), new AliveCell() ],
            [ new AliveCell(), new DeadCell() ]
        ]

        const expectedBoard = [
            [ EMPTY, FILLED ],
            [ FILLED, EMPTY ]
        ]

        expect(convertCellBoardToCellStatusBoard(board)).toStrictEqual(expectedBoard);
    })

    test('cell status board to cell board', () => {
        const board = [
            [ EMPTY, FILLED ],
            [ FILLED, EMPTY ]
        ]

        const expectedBoard = [
            [ new DeadCell(), new AliveCell() ],
            [ new AliveCell(), new DeadCell() ]
        ]

        expect(convertCellStatusBoardToCellBoard(board)).toStrictEqual(expectedBoard);
    })
})

describe('during cell board to cell status board conversion, should throw an error if', () => {
    test('trying to pass a null board', () => {
        expect(() => convertCellBoardToCellStatusBoard(null)).toThrow(/^Initialized with an empty board$/)
    })

    test('trying to pass invalid size board', () => {
        expect(() => convertCellBoardToCellStatusBoard([])).toThrow(/^Invalid board size$/)
    })

    test('trying to pass a board with null cells', () => {
        expect(() => convertCellBoardToCellStatusBoard([[null, null]])).toThrow(/^All cells of the board must be non-null$/)
    })
})

describe('during cell status board to cell board conversion, should throw an error if', () => {
    test('trying to pass a null board', () => {
        expect(() => convertCellStatusBoardToCellBoard(null)).toThrow(/^Initialized with an empty board$/)
    })

    test('trying to pass invalid size board', () => {
        expect(() => convertCellStatusBoardToCellBoard([])).toThrow(/^Invalid board size$/)
    })

    test('trying to pass a board with null cells', () => {
        expect(() => convertCellStatusBoardToCellBoard([[null, null]])).toThrow(/^All cells of the board must be non-null$/)
    })
})