import React from 'react';
import './Cell.scss';
import {DOORS, KEYS} from "../LevelSelection/levels";

//todo change the img names to be relevant

const bgPlayer = '/resources/p1_walk01.png';


const BACKGROUND_MAPPING = {
    0: '/resources/brickWall.png',
    1: '/resources/castleCenter.png',
    2: '/resources/grassCenter.png',
    3: '/resources/door_closedMid.png',
    4: '/resources/keyGreen.png',
    5: '/resources/keyYellow.png',
    6: '/resources/keyRed.png',
    7: '/resources/keyBlue.png',
    44: '/resources/doorGreen.png',
    55: '/resources/doorYellow.png',
    66: '/resources/doorRed.png',
    77: '/resources/doorBlue.png',
};

//component which represents every div in the mazeGrid
const Cell = React.memo(({cellValue, isPlayerHere, userBag}) => {

    let cellBackgrounds = [];

    const buildBackground = (backgroundPaths) => {
        let styledString = backgroundPaths.map(e => `url(${process.env.PUBLIC_URL + e})`);
        return styledString.join(',')
    };

    if (isPlayerHere) {
        cellBackgrounds.push(bgPlayer)
    }

    if (!userBag.includes(cellValue)) {
        cellBackgrounds.push(BACKGROUND_MAPPING[cellValue]);
    }

    if (KEYS.includes(cellValue) || DOORS.includes(cellValue)) {
        cellBackgrounds.push(BACKGROUND_MAPPING[2])
    }


    return <div style={{background: buildBackground(cellBackgrounds)}}/>
});

export default Cell;