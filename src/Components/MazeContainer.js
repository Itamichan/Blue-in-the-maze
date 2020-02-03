import React from 'react';
import useMaze from "./useMaze";

const MazeContainer = (props) => {

    const {mazeGrid, currentLocation, up, down, right, left, finish} = useMaze();

    return (
        <div>

        </div>
    )
};

export default MazeContainer;