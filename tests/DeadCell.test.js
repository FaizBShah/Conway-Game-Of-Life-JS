const CellOperations = require('../Cell/CellOperations')
const DeadCell = require('../Cell/DeadCell')

describe('dead cell object should', () => {
    test('be created successfully', () => {
        expect(() => new DeadCell()).not.toThrow()
    })

    test('return false when is alive is called', () => {
        expect(new DeadCell().isAlive()).toStrictEqual(false)
    })
})

describe('a dead cell should', () => {
    test('become alive if it exactly 3 neighbours', () => {
        expect(new DeadCell().next(3).isAlive()).toStrictEqual(true)
    })

    test('remain dead if it does not have 3 neighbours', () => {
        expect(new DeadCell().next(2).isAlive()).toStrictEqual(false)
        expect(new DeadCell().next(4).isAlive()).toStrictEqual(false)
    })
})

describe('alive cell should throw error if trying to call next() function with', () => {
    test('less than 0 neighbours', () => {
        expect(() => new DeadCell().next(-1)).toThrow(/^Number of neighbours of a cell can only be between 0 and 8$/);
    })

    test('more than 8 neighbours', () => {
        expect(() => new DeadCell().next(-1)).toThrow(/^Number of neighbours of a cell can only be between 0 and 8$/);
    })
})