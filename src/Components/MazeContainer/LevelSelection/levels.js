// 0-empty field; 1-wall; 2-path; 3-finish; 4-key;

export const LEVELS = {

    level1: {
        levelGrid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0],
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
            [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
            [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
        levelStart: [14, 3]

    },

    level2: {
        levelGrid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 1, 0],
            [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1],
            [2, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2],
            [2, 2, 2, 1, 0, 1, 2, 1, 1, 0, 0, 1, 2, 1, 1],
            [1, 1, 2, 1, 1, 2, 2, 1, 1, 0, 0, 1, 2, 2, 1],
            [0, 1, 2, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1],
            [0, 1, 2, 2, 2, 1, 0, 1, 1, 1, 2, 2, 2, 2, 1],
            [0, 0, 1, 1, 3, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1],
            [0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1],
            [0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1],
            [0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
            [0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
        levelStart: [14, 3]
    },

    level3: {
        levelGrid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 1, 0],
            [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1],
            [2, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2],
            [2, 2, 2, 1, 0, 1, 2, 1, 1, 0, 0, 1, 2, 1, 1],
            [1, 1, 2, 1, 1, 2, 2, 1, 1, 0, 0, 1, 2, 2, 1],
            [0, 1, 2, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1],
            [0, 1, 2, 2, 2, 1, 0, 1, 1, 1, 2, 2, 2, 2, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1],
            [0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1],
            [0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1],
            [0, 0, 4, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
            [0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
        levelStart: [14, 3]
    }


};