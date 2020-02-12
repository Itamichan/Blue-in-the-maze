import React, {Fragment, useEffect, useState} from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";
import ControlButtons from "./Buttons/ControlButtons/ControlButtons";
import PropTypes from 'prop-types';
import TimeTracker from "../TimeTracker/TimeTracker";

const MazeContainer = ({mazeLevel, onPlayerFinish}) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish, currentTime, setCurrentTime} = useMaze(mazeLevel);


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

    if (finish) {
        onPlayerFinish('show total Score')
    }

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


    useEffect(() => {
           let timer = setInterval(
                (prevState) => {
                    setCurrentTime(prevState => prevState += 1)
                },
                1000
            );
            return () => {
                clearInterval(timer)
            }
        }
    );


    return (<Fragment>

            <div
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}>
                {gameRepresentation}
            </div>
            <TimeTracker>Time: {currentTime} </TimeTracker>
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