import React from 'react';
import './Cell.css';

//component which represents every div in the mazeGrid
const Cell = ({cellValue, isPlayerHere}) => {

    switch (cellValue) {
        case 0:
            return <div className={'grid-cell empty-field'}/>;
        case 1:
            return <div className={'grid-cell wall-field'}/>;
        case 2:
            return <div className={isPlayerHere? 'grid-cell path-field-player' : 'grid-cell path-field'}/>;
        case 3:
            return <div className={isPlayerHere? 'grid-cell finish-field-player' :'grid-cell finish-field'}/>;
        default:
            return null
    }
};

export default Cell;