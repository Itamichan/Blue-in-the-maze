import React, {Fragment, useEffect, useState} from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";
import ControlButtons from "./Buttons/ControlButtons/ControlButtons";
import PropTypes from 'prop-types';
import TimeTracker from "../TimeTracker/TimeTracker";

const MazeContainer = ({mazeLevel, onPlayerFinish, onPlayerLose}) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish} = useMaze(mazeLevel);
    const [currentTime, setCurrentTime] = useState(0);
    const [countDown, setCountDown] = useState(60);

    //maps through the mazeGrid to return cells in a specific style
    const gameRepresentation = mazeGrid.map((row, rowIndex) => {
        const rowRepresentation = row.map((cell, cellIndex) => {
            //checks the player's location
            let isPlayerHere = currentLocation[0] === rowIndex && currentLocation[1] === cellIndex;
            return <Cell key={rowIndex.toString() + cellIndex.toString()} cellValue={cell}
                         isPlayerHere={isPlayerHere}
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

    useEffect(() => {
            let count;
            //decides which timer to show based on the game level
            if (mazeLevel === 'level1') {
                count = setInterval(
                    (prevState) => {
                        setCurrentTime(prevState => prevState += 1);
                    },
                    1000
                );
            } else {
                count = setInterval(
                    (prevState) => {
                        setCountDown(prevState => prevState -= 1);
                    },
                    1000
                );
            }
            return () => {
                clearInterval(count)
            }
        }
    );

    let timer;
    if (mazeLevel === 'level1') {
        timer = currentTime;
    } else {
        timer = countDown;
    }


    //setts the winning condition

    if (finish) {
        onPlayerFinish(`You got free in ${timer} seconds!`)
    }

    let lost = false;
    if (countDown <= 0) {
        lost = true;
    }

    if (lost) {
        onPlayerLose()
    }


    return (<Fragment>

            <div
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}>
                {gameRepresentation}
            </div>
            <TimeTracker>Time: {timer} seconds </TimeTracker>
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