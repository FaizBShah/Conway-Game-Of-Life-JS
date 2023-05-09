const CellOperations = require('../Cell/CellOperations')
const AliveCell = require('../Cell/AliveCell')

describe('alive cell object should', () => {
    test('be created successfully', () => {
        expect(() => new AliveCell()).not.toThrow()
    })

    test('return true when is alive is called', () => {
        expect(new AliveCell().isAlive()).toStrictEqual(true)
    })
})

describe('an alive cell should', () => {
    test('remain alive if it has 2 or 3 neighbours', () => {
        expect(new AliveCell().next(2).isAlive()).toStrictEqual(true)
        expect(new AliveCell().next(3).isAlive()).toStrictEqual(true)
    })

    test('die if it has less than 2 neighbours', () => {
        expect(new AliveCell().next(0).isAlive()).toStrictEqual(false)
        expect(new AliveCell().next(1).isAlive()).toStrictEqual(false)
    })

    test('die if it has more than 3 neighbours', () => {
        expect(new AliveCell().next(4).isAlive()).toStrictEqual(false)
        expect(new AliveCell().next(7).isAlive()).toStrictEqual(false)
    })
})

describe('alive cell should throw error if trying to call next() function with', () => {
    test('less than 0 neighbours', () => {
        expect(() => new AliveCell().next(-1)).toThrow(/^Number of neighbours of a cell can only be between 0 and 8$/);
    })

    test('more than 8 neighbours', () => {
        expect(() => new AliveCell().next(-1)).toThrow(/^Number of neighbours of a cell can only be between 0 and 8$/);
    })
})