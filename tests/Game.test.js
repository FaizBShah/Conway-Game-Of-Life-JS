const CellOperations = require('../Cell/CellOperations');
const { EMPTY, FILLED } = require('../Cell/CellStatus');
const Game = require('../Game/Game')

describe('game object should get', () => {
    test('generated correctly', () => {
        expect(() => new Game()).not.toThrow();
    })

    test('initialized with a board successfully', () => {
        const game = new Game();
        const board = [
            [ EMPTY, EMPTY, FILLED ],
            [ EMPTY, FILLED, EMPTY ],
            [ FILLED, FILLED, EMPTY ]
        ]

        expect(() => game.startWithBoard(board)).not.toThrow();
        expect(() => game.stop()).not.toThrow();
    })

    test('initialized with a random board successfully', () => {
        const game = new Game();

        expect(() => game.startWithRandomBoardOfSize(3, 3)).not.toThrow();
        expect(() => game.tick()).not.toThrow();

        const cell = game.tick()

        expect(cell.length).toStrictEqual(3);
        expect(cell[0].length).toStrictEqual(3);

        expect(() => game.stop()).not.toThrow();
    })
})

describe('if trying to initialize game with a board, should throw error if', () => {
    test('trying to pass a null board', () => {
        expect(() => new Game().startWithBoard(null)).toThrow(/^Initialized with an empty board$/)
    })

    test('trying to pass invalid size board', () => {
        expect(() => new Game().startWithBoard([])).toThrow(/^Invalid board size$/)
    })

    test('trying to start an already started game', () => {
        const game = new Game();
        const board = [
            [ EMPTY, EMPTY, FILLED ],
            [ EMPTY, FILLED, EMPTY ],
            [ FILLED, FILLED, EMPTY ]
        ]

        game.startWithBoard(board);

        expect(() => game.startWithBoard(board)).toThrow(/^Game has already been started with a board$/)
    })
})

describe('if trying to initialize game with a random board, should throw error if', () => {
    test('trying to start an already started game', () => {
        const game = new Game();

        game.startWithRandomBoardOfSize(3, 3);

        expect(() => game.startWithRandomBoardOfSize(3, 3)).toThrow(/^Game has already been started with a board$/)
    })

    test('trying to initialize with negative row or column length', () => {
        const game = new Game();

        expect(() => game.startWithRandomBoardOfSize(-1, 3)).toThrow(/^Dimensions of the board should be valid$/)
        expect(() => game.startWithRandomBoardOfSize(3, -1)).toThrow(/^Dimensions of the board should be valid$/)
        expect(() => game.startWithRandomBoardOfSize(-1, -1)).toThrow(/^Dimensions of the board should be valid$/)
    })
})

describe('should tick', () => {
    test('function work correctly', () => {
        const game = new Game();
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

        game.startWithBoard(board);

        expect(game.tick()).toStrictEqual(expectedBoard);
    })

    test('function throw an error if the game has not been initialized', () => {
        expect(() => new Game().tick()).toThrow(/^Game has not been initialized with a board yet$/)
    })

    test('N function work correctly', () => {
        const game = new Game();
        const board = [
            [ EMPTY, EMPTY, FILLED ],
            [ EMPTY, FILLED, EMPTY ],
            [ FILLED, FILLED, EMPTY ]
        ]
        const expectedBoard = [
            [ EMPTY, FILLED, EMPTY ],
            [ FILLED, EMPTY, FILLED ],
            [ FILLED, EMPTY, FILLED ]
        ]

        game.startWithBoard(board);

        expect(game.tick(2)).toStrictEqual(expectedBoard);
    })

    test('N function throw an error if the game has not been initialized', () => {
        expect(() => new Game().tick(5)).toThrow(/^Game has not been initialized with a board yet$/)
    })
})

describe('stop function should', () => {
    test('work properly', () => {
        const game = new Game();

        game.startWithRandomBoardOfSize(3, 3);

        expect(() => game.stop()).not.toThrow()
    })

    test('throw an error if the game has not been initialized', () => {
        expect(() => new Game().stop()).toThrow(/^There is no game currently being run that could be stopped$/)
    })
})