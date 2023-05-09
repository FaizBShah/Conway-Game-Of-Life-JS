const { nextCell } = require('../Cell/CellOperations')
const AliveCell = require('../Cell/AliveCell')
const DeadCell = require('../Cell/DeadCell')

describe('should return dead cell if', () => {
    test('number of alive neighbours is zero', () => {
        expect(nextCell(true, 0) instanceof DeadCell).toStrictEqual(true)
        expect(nextCell(false, 0) instanceof DeadCell).toStrictEqual(true)
    })

    test('number of alive neighbours is one', () => {
        expect(nextCell(true, 1) instanceof DeadCell).toStrictEqual(true)
        expect(nextCell(false, 1) instanceof DeadCell).toStrictEqual(true)
    })

    test('number of alive neighbours is two and cell is dead', () => {
        expect(nextCell(false, 2) instanceof DeadCell).toStrictEqual(true)
    })

    test('number of alive neighbours is four', () => {
        expect(nextCell(true, 4) instanceof DeadCell).toStrictEqual(true)
        expect(nextCell(false, 4) instanceof DeadCell).toStrictEqual(true)
    })

    test('number of alive neighbours is five', () => {
        expect(nextCell(true, 5) instanceof DeadCell).toStrictEqual(true)
        expect(nextCell(false, 5) instanceof DeadCell).toStrictEqual(true)
    })

    test('number of alive neighbours is six', () => {
        expect(nextCell(true, 6) instanceof DeadCell).toStrictEqual(true)
        expect(nextCell(false, 6) instanceof DeadCell).toStrictEqual(true)
    })

    test('number of alive neighbours is seven', () => {
        expect(nextCell(true, 7) instanceof DeadCell).toStrictEqual(true)
        expect(nextCell(false, 7) instanceof DeadCell).toStrictEqual(true)
    })

    test('number of alive neighbours is eight', () => {
        expect(nextCell(true, 8) instanceof DeadCell).toStrictEqual(true)
        expect(nextCell(false, 8) instanceof DeadCell).toStrictEqual(true)
    })
})

describe('should return alive cell if', () => {
    test('number of alive neighbours is two and cell is alive', () => {
        expect(nextCell(true, 2) instanceof AliveCell).toStrictEqual(true)
    })

    test('number of alive neighbours is three', () => {
        expect(nextCell(true, 3) instanceof AliveCell).toStrictEqual(true)
        expect(nextCell(false, 3) instanceof AliveCell).toStrictEqual(true)
    })
})