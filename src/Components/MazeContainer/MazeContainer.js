import React, {Fragment, useState} from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";
import ControlButtons from "./Buttons/ControlButtons/ControlButtons";
import PropTypes from 'prop-types';
import './MazeContainer.scss';
import {LEVELS} from "./LevelSelection/levels";

const MazeContainer = ({mazeLevel, onPlayerFinish, onPlayerLose}) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish, screenTime, playerLost, userBag} = useMaze(mazeLevel, onPlayerLose);

    //maps through the mazeGrid to return cells in a specific style
    const gameRepresentation = mazeGrid.map((row, rowIndex) => {
        const rowRepresentation = row.map((cell, cellIndex) => {
            //checks the player's location
            let isPlayerHere = currentLocation[0] === rowIndex && currentLocation[1] === cellIndex;
            //checking if the maze has a key
            let keyPresent = LEVELS[mazeLevel].key.filter((e) => {


                    return e.keyPosition[0] === rowIndex && e.keyPosition[1] === cellIndex;
            });
            console.log(keyPresent);
            return <Cell key={rowIndex.toString() + cellIndex.toString()}
                         cellValue={cell}
                         isPlayerHere={isPlayerHere}
                         userBag={userBag}
                // isKeyHere={isKeyHere}
            />;
        });
        return <div key={rowIndex.toString()} className={'mazeRow'}>{rowRepresentation}</div>
    });


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

    //re-renders the component every second and adds a second to the TimeTracker


    //setts the winning condition

    if (finish) {
        onPlayerFinish(`You got free in ${screenTime} seconds!`)
    }

    if (playerLost) {
        onPlayerLose()
    }

    return (<Fragment>

            <div
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}>
                {gameRepresentation}
            </div>
            <div id={'time-tracker'}>Time: {screenTime}</div>
            <ControlButtons
                up={up}
                down={down}
                left={left}
                right={right}
            />
        </Fragment>
    );


};

MazeContainer.prototype = {
    mazeLevel: PropTypes.string.isRequired
};

export default MazeContainer;