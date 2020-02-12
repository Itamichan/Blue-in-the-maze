import React from 'react';
import './Cell.scss';

//component which represents every div in the mazeGrid
const Cell = ({cellValue, isPlayerHere, exitKey}) => {

    let cellBackground;
    if (cellValue === 2) {
        cellBackground = 'path-field';
        if (isPlayerHere) {
            cellBackground = 'path-field-player'
        }
        if (exitKey) {
            cellBackground = 'path-field-key';
            if (isPlayerHere) {
                cellBackground = 'path-field-player'
            }
        }
    }

    switch (cellValue) {
        case 0:
            return <div className={'empty-field'}/>;
        case 1:
            return <div className={'wall-field'}/>;
        case 2:
            return <div className={cellBackground}/>;
        case 3:
            return <div className={isPlayerHere ? 'finish-field-player' : 'finish-field'}/>;
        default:
            return null
    }
};

export default Cell;