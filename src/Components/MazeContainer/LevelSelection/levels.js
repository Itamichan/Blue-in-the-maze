//game keys and their corresponding doors
export const KEYS = [4, 5, 6, 7];
export const DOORS = KEYS.map(e => e * 11);


export const BACKGROUND_PLAYER = '/resources/p1_walk01.png';
export const BACKGROUND_MAPPING = {

    // 0-empty field;
    // 1-wall;
    // 2-path;
    // 3-finish;
    0: '/resources/earth.png',
    1: '/resources/wall.png',
    2: '/resources/path.png',
    3: '/resources/finish.png',
    8: '/resources/exit.png',

    //key, door, openDoor
    //ex: 4-green key, 44-greenDoor, 45-greenOpenDoor
    4: '/resources/keyGreen.png',
    44: '/resources/doorGreen.png',
    45: '/resources/doorGreenOpen.png',

    5: '/resources/keyYellow.png',
    55: '/resources/doorYellow.png',
    56: '/resources/doorYellowOpen.png',

    6: '/resources/keyRed.png',
    66: '/resources/doorRed.png',
    67: '/resources/doorRedOpen.png',

    7: '/resources/keyBlue.png',
    77: '/resources/doorBlue.png',
    78: '/resources/doorBlueOpen.png',
};

export const LEVELS = {

    level1: {
        levelGrid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 8, 1, 1, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 1, 0],
            [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1],
            [2, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2],
            [2, 2, 2, 1, 0, 1, 2, 1, 1, 0, 0, 1, 2, 1, 1],
            [1, 1, 2, 1, 1, 2, 2, 1, 1, 0, 0, 1, 2, 2, 1],
            [0, 1, 2, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1],
            [0, 1, 2, 2, 2, 1, 0, 1, 1, 1, 2, 2, 2, 2, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1],
            [0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1],
            [0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1],
            [0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
            [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
        levelStart: [14, 3],
        timeLeft: undefined

    },

    level2: {
        levelGrid: [
            [1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 0, 1, 1, 1],
            [0, 1, 2, 1, 1, 1, 4, 1, 1, 2, 1, 1, 1, 0, 0],
            [0, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 0, 0],
            [0, 0, 1, 1, 2, 1, 1, 1, 0, 1, 1, 2, 1, 0, 0],
            [1, 1, 1, 1, 2, 2, 2, 2, 1, 0, 1, 2, 1, 1, 1],
            [2, 2, 2, 1, 1, 1, 1, 2, 1, 0, 1, 2, 1, 1, 1],
            [1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1],
            [0, 1, 2, 2, 2, 1, 1, 1, 2, 1, 0, 1, 1, 44, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 2, 1],
            [1, 0, 0, 0, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1],
            [8, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1],
            [3, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
            [1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
            [0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0],
        ],
        levelStart: [0, 9],
        timeLeft: undefined
    },

    level3: {
        levelGrid: [
            [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
            [1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0],
            [5, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1],
            [1, 1, 2, 77, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 8],
            [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 55, 2, 3],
            [0, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1],
            [0, 0, 1, 2, 1, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1],
            [0, 0, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 7, 2, 2],
            [1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1],
            [2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
            [0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
        ],
        levelStart: [11, 0],
        timeLeft: 30
    },

    level4: {
        levelGrid: [
            [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1, 1],
            [0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1],
            [1, 2, 2, 1, 1, 1, 2, 6, 1, 2, 2, 2, 2, 2, 1],
            [2, 2, 1, 2, 2, 77, 2, 1, 2, 2, 1, 1, 1, 2, 1],
            [2, 1, 1, 2, 1, 1, 2, 2, 2, 1, 0, 1, 2, 2, 2],
            [2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
            [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2],
            [2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
            [2, 1, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2],
            [2, 1, 66, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
            [2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 7, 1, 2],
            [2, 1, 1, 1, 5, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
            [2, 2, 1, 1, 2, 2, 2, 2, 2, 55, 2, 2, 2, 2, 2],
            [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 8, 1, 0, 0, 0],
        ],
        levelStart: [6, 14],
        timeLeft: 60
    },

    level5: {
        levelGrid: [
            [0, 1, 2, 1, 0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1],
            [0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 7, 2, 66],
            [1, 1, 2, 1, 2, 2, 2, 6, 2, 2, 2, 1, 1, 1, 2],
            [1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
            [8, 1, 2, 1, 2, 1, 1, 0, 0, 1, 2, 2, 2, 2, 2],
            [3, 1, 2, 2, 44, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            [2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
            [2, 77, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 1, 1],
            [1, 1, 2, 1, 0, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2],
            [1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2],
            [1, 1, 2, 2, 2, 1, 2, 2, 2, 55, 2, 2, 4, 1, 2],
            [0, 0, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
            [0, 1, 2, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
            [1, 1, 2, 1, 1, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0],
        ],
        levelStart: [14, 9],
        timeLeft: 40
    },


};