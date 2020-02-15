import React from 'react';
import './Cell.scss';

//component which represents every div in the mazeGrid
const Cell = ({cellValue, isPlayerHere, userBag}) => {


    switch (cellValue) {
        case 0:
            return <div className={'empty-field'}/>;
        case 1:
            return <div className={'wall-field'}/>;
        case 2:
            return <div className={isPlayerHere ? 'path-field-player' : 'path-field'}/>;
        case 3:
            return <div className={isPlayerHere ? 'finish-field-player' : 'finish-field'}/>;
        case 4:
            return <div className={isPlayerHere ? 'path-field-player' : 'path-field-key'}/>;
        default:
            return null
    }
};

export default Cell;