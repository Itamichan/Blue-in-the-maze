import React from 'react';
import useMaze from "./useMaze";
import Cell from "./Cell/Cell";

const MazeContainer = (props) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish} = useMaze();

    // 3 stands for the player location
    mazeGrid[currentLocation[0]][currentLocation[1]] = 3;

    const gameRepresentation = mazeGrid.map(row => {
        const rowRepresentation = row.map(cell => {
            return <Cell cellValue={cell}/>
        });
        return <div style={{height: '50px'}}>{rowRepresentation}</div>
    });

    return (
        <div>
            {gameRepresentation}
            <button onClick={up} >Button up</button>
            <button onClick={down}>Button down</button>
            <button onClick={left}>Button left</button>
            <button onClick={right}>Button right</button>
        </div>
    )
};

export default MazeContainer;