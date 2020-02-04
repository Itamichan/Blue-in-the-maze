import React, {Fragment} from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";

const MazeContainer = (props) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish} = useMaze();

    // 3 stands for the player location
    mazeGrid[currentLocation[0]][currentLocation[1]] = 3;

    //maps through the mazeGrid to return cells in specific style
    const gameRepresentation = mazeGrid.map((row, rowIndex) => {
        const rowRepresentation = row.map((cell, cellIndex) => {
            return <Cell key = {rowIndex.toString() + cellIndex.toString()} cellValue={cell}/>;

        });
        return <div key = {rowIndex.toString()} style={{height: '50px'}}>{rowRepresentation}</div>
    });

    //setting the winning condition
    let playerWon;
    if (finish) {
        playerWon = <div>You found the exit!</div>
    }

    //controlling the player location with arrow keys
    const handleKeyDown = (e) => {
        switch (e.keyCode) {
            case 37:
                return left();
            case 38:
                return up();
            case 39:
                return right();
            case 40:
                return down();
            default:
                return null
        }
    };

    return (<Fragment>
            <div
                style={{border: '1px solid black'}}
                tabIndex={-1}
                onKeyDown={handleKeyDown}>
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