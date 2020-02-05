import React, {Fragment, useEffect, useState} from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";

const MazeContainer = (props) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish} = useMaze();

    // 4 stands for the player location
    // mazeGrid[currentLocation[0]][currentLocation[1]] = 4;

    //maps through the mazeGrid to return cells in specific style
    const gameRepresentation = mazeGrid.map((row, rowIndex) => {
        const rowRepresentation = row.map((cell, cellIndex) => {
            let isPlayerHere = currentLocation[0] === rowIndex && currentLocation[1] === cellIndex;
            return <Cell key={rowIndex.toString() + cellIndex.toString()} cellValue={cell} isPlayerHere={isPlayerHere}/>;

        });
        return <div key={rowIndex.toString()} style={{height: '70px'}}>{rowRepresentation}</div>
    });

    //setting the winning condition
    let playerWon;
    if (finish) {
        playerWon = <div>You found the exit!</div>
    }
    //todo behaves weird
    // useEffect(() => {
    //     document.addEventListener('keydown', handleKeyDown);
    //     document.addEventListener('keyup', handleKeyUp)
    // });


    const [currentA, setA] = useState(true);

    //controlling the player location with arrow keys
    const handleKeyDown = (e) => {
        if (currentA) {
            switch (e.keyCode) {
                case 37:
                    left();
                    setA(false);
                    break;
                case 38:
                    up();
                    setA(false);
                    break;
                case 39:
                    right();
                    setA(false);
                    break;
                case 40:
                    down();
                    setA(false);
                    break;
                default:
                    break
            }
        }

    };

    const handleKeyUp = (e) => {
        setA(true)
    };


    return (<Fragment>

            <div
                tabIndex={-1}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}>
                {gameRepresentation}
            </div>
            <div>
                {playerWon}
                <button onClick={up}>Button up</button>
                <button onClick={down}>Button down</button>
                <button onClick={left}>Button left</button>
                <button onClick={right}>Button right</button>
            </div>
        </Fragment>
    )
};

export default MazeContainer;