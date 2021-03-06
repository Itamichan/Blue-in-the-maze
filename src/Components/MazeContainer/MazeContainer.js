import React, {Fragment, useEffect, useState} from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";
import ControlButtons from "./Buttons/ControlButtons/ControlButtons";
import PropTypes from 'prop-types';
import './MazeContainer.scss';
import {BACKGROUND_MAPPING} from "./LevelSelection/levels";
import {isMobile, isTablet} from "react-device-detect";

const MazeContainer = ({mazeLevel, onPlayerFinish, onPlayerLose}) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish, screenTime, playerLost, userBag, finishTime} = useMaze(mazeLevel, onPlayerLose);

    //maps through the mazeGrid to return cells in a specific style
    const gameRepresentation = mazeGrid.map((row, rowIndex) => {
        const rowRepresentation = row.map((cell, cellIndex) => {
            //checks the player's location
            let isPlayerHere = currentLocation[0] === rowIndex && currentLocation[1] === cellIndex;
            return <Cell key={rowIndex.toString() + cellIndex.toString()}
                         cellValue={cell}
                         isPlayerHere={isPlayerHere}
                         userBag={userBag}
            />;
        });
        return <div key={rowIndex.toString()} className={'maze-row'}>{rowRepresentation}</div>
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

    //calls handleKeyDown and handleKeyUp functions when we press and release the key
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
    });

    //shows the collected keys below the maze
    let collectedKeys = userBag.map((key) => {
        return <div
            key={key}
            className={'keys'}
            style={{backgroundImage: `url(${process.env.PUBLIC_URL + BACKGROUND_MAPPING[key]})`}}/>
    });

    //setts the winning condition
    if (finish) {
        onPlayerFinish(`You got free in ${finishTime} seconds!`)
    }

    if (playerLost) {
        onPlayerLose()
    }

    //renders ControlButtons only on mobile and tablet devices
    let renderControlButtons = () => {
        if (isMobile || isTablet) {
            return <ControlButtons
                up={up}
                down={down}
                left={left}
                right={right}
            />
        } else {
            return null
        }
    };


    return (<Fragment>
            <div>
                {gameRepresentation}
            </div>
            <div id={'maze-footer'}>
                <div
                    id={'time-tracker'}
                    className={'text-default'}>
                    Time: {screenTime}
                </div>
                <div id={'user-bag'}>{collectedKeys}</div>
            </div>
            <div>{renderControlButtons()}</div>
        </Fragment>
    );
};

MazeContainer.prototype = {
    mazeLevel: PropTypes.string.isRequired
};

export default MazeContainer;