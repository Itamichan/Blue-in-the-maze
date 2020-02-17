import React from 'react';
import './Cell.scss';
import {DOORS, KEYS, BACKGROUND_MAPPING, BACKGROUND_PLAYER} from "../LevelSelection/levels";



//component which represents every div in the mazeGrid
const Cell = ({cellValue, isPlayerHere, userBag}) => {

    let cellBackgrounds = [];

    const openDoor = userBag.map((key) => key * 11);

    const buildBackground = (backgroundPaths) => {
        let styledString = backgroundPaths.map(e => `url(${process.env.PUBLIC_URL + e})`);
        return styledString.join(',')
    };

    if (isPlayerHere) {
        cellBackgrounds.push(BACKGROUND_PLAYER)
    }

    if (!userBag.includes(cellValue) && !openDoor.includes(cellValue)) {
        cellBackgrounds.push(BACKGROUND_MAPPING[cellValue]);
    }

    if (openDoor.includes(cellValue)) {
        cellBackgrounds.push(BACKGROUND_MAPPING[cellValue + 1]);
    }

    if (KEYS.includes(cellValue) || DOORS.includes(cellValue)) {
        cellBackgrounds.push(BACKGROUND_MAPPING[2])
    }


    return <div style={{background: buildBackground(cellBackgrounds)}}/>
};

export default Cell;