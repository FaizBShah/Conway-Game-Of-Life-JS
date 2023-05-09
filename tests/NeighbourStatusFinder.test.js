const CellOperations = require('../Cell/CellOperations')
const AliveCell = require('../Cell/AliveCell')
const DeadCell = require('../Cell/DeadCell')
const { getNumberOfAliveNeighbours } = require('../utils/NeighbourStatusFinder')

describe('getNumberOfAliveNeighbours should work', () => {
    test('correctly', () => {
        const board = [
            [ new DeadCell(), new DeadCell(), new AliveCell() ],
            [ new DeadCell(), new AliveCell(), new DeadCell() ],
            [ new AliveCell(), new AliveCell(), new DeadCell() ]
        ]

        expect(getNumberOfAliveNeighbours(1, 1, board)).toStrictEqual(3);
    })
})

describe('getNumberOfAliveNeighbours should throw an error if', () => {
    test('trying to pass a null board', () => {
        expect(() => getNumberOfAliveNeighbours(1, 1, null)).toThrow(/^Initialized with an empty board$/)
    })

    test('trying to pass invalid size board', () => {
        expect(() => getNumberOfAliveNeighbours(1, 1, [])).toThrow(/^Invalid board size$/)
    })

    test('trying to pass invalid coordinates', () => {
        const board = [
            [ new DeadCell(), new DeadCell(), new AliveCell() ],
            [ new DeadCell(), new AliveCell(), new DeadCell() ],
            [ new AliveCell(), new AliveCell(), new DeadCell() ]
        ]

        expect(() => getNumberOfAliveNeighbours(4, -1, board)).toThrow(/^Coordinates of the cell are out of bounds of the board size$/)
    })

    test('trying to pass a board with null cells', () => {
        expect(() => getNumberOfAliveNeighbours(0, 0, [[null, null]])).toThrow(/^All cells of the board must be non-null$/)
    })
})