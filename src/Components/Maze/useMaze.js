import {useState} from "react";

const useMaze = () => {

    // data structure of the Maze
    // numbers meaning: 0 - empty; 1 - wall; 2 - path; 3 - finish
    const mazeGrid = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0 ],
        [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 1, 0 ],
        [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1 ],
        [2, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2 ],
        [2, 2, 2, 1, 0, 1, 2, 1, 1, 0, 0, 1, 2, 1, 1 ],
        [1, 1, 2, 1, 1, 2, 2, 1, 1, 0, 0, 1, 2, 2, 1 ],
        [0, 1, 2, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1 ],
        [0, 1, 2, 2, 2, 1, 0, 1, 1, 1, 2, 2, 2, 2, 1 ],
        [0, 0, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1 ],
        [0, 0, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1 ],
        [0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1 ],
        [1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1 ],
        [0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1 ],
        [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1 ],
        [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1 ],
    ];



    let valueX = localStorage.getItem('X');
    let valueY = localStorage.getItem('Y');

    if (valueX === null) {
        valueX = 14
    } else {
        valueX = parseInt(valueX)
    }

    if (valueY === null) {
        valueY = 3
    } else {
        valueY = parseInt(valueY)
    }
    // setting the currentLocation variable
    const [currentLocation, setCurrentLocation] = useState([valueX, valueY]);

    // initialization of finish var and setting the condition when it becomes true
    let finish = false;
    if (mazeGrid[currentLocation[0]][currentLocation[1]] === 3) {
        finish = true
    }

    // allows us to change the currentLocation in the mazeGrid
    const move = (deltaY, deltaX) => {
        let Y = currentLocation[0];
        let X = currentLocation[1];

        let newLocation = [Y + deltaY, X + deltaX];
        // doesn't allow to walk into a wall
        if (mazeGrid[newLocation[0]][newLocation[1]] !== 1) {
            setCurrentLocation(newLocation);
            localStorage.setItem('X', newLocation[0]);
            localStorage.setItem('Y', newLocation[1]);
        }
    };

    const up = () => {
        if (currentLocation[0] > 0) {
            move(-1, 0)
        }
    };

    const down = () => {
        if (currentLocation[0] < mazeGrid.length - 1) {
            move (1, 0)
        }
    };

    const right = () => {
        if (currentLocation[1] < mazeGrid[0].length - 1) {
            move (0, 1)
        }
    };

    const left = () => {
        if (currentLocation[1] > 0) {
            move (0, -1)
        }
    };

    return {
        mazeGrid,
        currentLocation,
        finish,
        up,
        down,
        right,
        left
    }
};

export default useMaze;
