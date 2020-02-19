import React from 'react';
import './Cell.scss';
import {DOORS, KEYS, BACKGROUND_MAPPING, BACKGROUND_PLAYER} from "../LevelSelection/levels";

//component which represents every div in the mazeGrid
const Cell = ({cellValue, isPlayerHere, userBag}) => {

    let cellBackgrounds = [];
    //creates an array with the doors to which user has access
    const openDoor = userBag.map((key) => key * 11);

    //adds the player image if the player is present in the div
    if (isPlayerHere) {
        cellBackgrounds.push(BACKGROUND_PLAYER)
    }

    //renders all the img for the divs except if the user collected a key or opened a door
    if (!userBag.includes(cellValue) && !openDoor.includes(cellValue)) {
        cellBackgrounds.push(BACKGROUND_MAPPING[cellValue]);
    }

    //applies the open door img if user has the key for this door
    if (openDoor.includes(cellValue)) {
        cellBackgrounds.push(BACKGROUND_MAPPING[cellValue + 1]);
    }

    //applies the path img under the present items img
    if (KEYS.includes(cellValue) || DOORS.includes(cellValue)) {
        cellBackgrounds.push(BACKGROUND_MAPPING[2])
    }

    //applies the wall img under the exit sign img
    if (cellValue === 8) {
        cellBackgrounds.push(BACKGROUND_MAPPING[1])
    }

    //maps through cellBackgrounds array and returns the img urls for each one
    //makes possible to apply several img on one div
    const buildBackground = (backgroundPaths) => {
        let styledDiv = backgroundPaths.map(e => `url(${process.env.PUBLIC_URL + e})`);
        return styledDiv.join(',')
    };

    return <div style={{background: buildBackground(cellBackgrounds)}}/>
};

export default Cell;