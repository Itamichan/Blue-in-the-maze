import React, {Fragment, useEffect, useState} from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";
import ControlButtons from "../ControlButtons";

import './MazeContainer.scss';
import {Container, Row, Col, Button} from 'reactstrap';

const MazeContainer = (props) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish} = useMaze();

    // 4 stands for the player location
    // mazeGrid[currentLocation[0]][currentLocation[1]] = 4;

    //maps through the mazeGrid to return cells in a specific style
    const gameRepresentation = mazeGrid.map((row, rowIndex) => {
        const rowRepresentation = row.map((cell, cellIndex) => {
            //checks the player's location
            let isPlayerHere = currentLocation[0] === rowIndex && currentLocation[1] === cellIndex;
            return <Cell key={rowIndex.toString() + cellIndex.toString()} cellValue={cell}
                         isPlayerHere={isPlayerHere}/>;

        });
        return <div key={rowIndex.toString()} className={'mazeRow'}>{rowRepresentation}</div>
    });

    //setts the winning condition
    let playerWon;
    if (finish) {
        playerWon = <div>You found the exit!</div>
    }
    //todo behaves weird
    //
    // useEffect(() => {
    //     localStorage.setItem('currentLevel', 'level_1');
    //     alert(localStorage.getItem('currentLevel'))
    // });


    //setting the rule which allows to move only one move at a time
    const [currentMoveAllowed, setMoveAllowed] = useState(true);

    //controlling the player location with arrow keys
    const handleKeyDown = (e) => {
        if (currentMoveAllowed) {
            switch (e.keyCode) {
                case 37:
                    left();
                    setMoveAllowed(false);
                    break;
                case 38:
                    up();
                    setMoveAllowed(false);
                    break;
                case 39:
                    right();
                    setMoveAllowed(false);
                    break;
                case 40:
                    down();
                    setMoveAllowed(false);
                    break;
                default:
                    break
            }
        }

    };

    const handleKeyUp = (e) => {
        setMoveAllowed(true)
    };


    return (<Fragment>
            <div
                className={'gameContainer'}
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}>
                {gameRepresentation}
                {playerWon}
            </div>

            <ControlButtons
                up={up}
                down={down}
                left={left}
                right={right}
            />
        </Fragment>
    )
};

export default MazeContainer;