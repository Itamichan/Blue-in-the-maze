import {useEffect, useState} from "react";
import {LEVELS} from "./LevelSelection/levels";

const useMaze = (mazeLevel, onPlayerLose) => {

    // data structure of the MazeContainer
    // numbers meaning: 0 - empty; 1 - wall; 2 - path; 3 - finish
    const mazeGrid = LEVELS[mazeLevel].levelGrid;


    // setting the currentLocation variable
    const [currentLocation, setCurrentLocation] = useState(LEVELS[mazeLevel].levelStart);
    const [startTime, setStartTime] = useState(new Date());

    let timeLeft = mazeLevel === 'level1' ? undefined : 60;
    let countDirection = mazeLevel === 'level1' ? 'up' : 'down';

    const [screenTime, setScreenTime] = useState(countDirection === 'up' ? 0 : timeLeft);
    const [playerLost, setPlayerLost] = useState(false);


    let updateScreenTime = () => {
        let timeDifference = (new Date() - startTime) / 1000;
        let newScreenTime = countDirection === 'up' ? timeDifference : timeLeft - timeDifference;
        //checks when the timeLeft expires
        if (countDirection === 'down' && screenTime < 1) {
            setPlayerLost(true);
        }
        setScreenTime(Math.floor(newScreenTime))
    };


    useEffect(() => {

            let intervalId = setInterval(() => {
                updateScreenTime()
            }, 50);
            return () => {
                clearInterval(intervalId)
            }
        }
    );

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
        }
    };

    const up = () => {
        if (currentLocation[0] > 0) {
            move(-1, 0)
        }
    };

    const down = () => {
        if (currentLocation[0] < mazeGrid.length - 1) {
            move(1, 0)
        }
    };

    const right = () => {
        if (currentLocation[1] < mazeGrid[0].length - 1) {
            move(0, 1)
        }
    };

    const left = () => {
        if (currentLocation[1] > 0) {
            move(0, -1)
        }
    };


    return {
        mazeGrid,
        currentLocation,
        finish,
        up,
        down,
        right,
        left,
        screenTime,
        playerLost
    }
};

export default useMaze;
