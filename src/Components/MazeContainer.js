import React from 'react';
import useMaze from "./useMaze";

const MazeContainer = (props) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish} = useMaze();

    // 3 stands for the player location
    mazeGrid[currentLocation[0]][currentLocation[1]] = 3;

    return (
        <div>

        </div>
    )
};

export default MazeContainer;