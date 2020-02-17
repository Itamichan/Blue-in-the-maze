import {useEffect, useState} from "react";
import {LEVELS, KEYS} from "./LevelSelection/levels";

const useMaze = (mazeLevel, onPlayerLose) => {

    // data structure of the MazeContainer
    // numbers meaning: 0 - empty; 1 - wall; 2 - path; 3 - finish
    const mazeGrid = LEVELS[mazeLevel].levelGrid;
    const timeLeft = LEVELS[mazeLevel].timeLeft;
    const countDirection = timeLeft === undefined ? 'up' : 'down';


    // setting the currentLocation variable
    const [currentLocation, setCurrentLocation] = useState(LEVELS[mazeLevel].levelStart);
    const [startTime, setStartTime] = useState(new Date());
    const [userBag, setUserBag] = useState([]);
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

    //todo index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

    // initialization of finish var and setting the condition when it becomes true
    let finish = false;
    if (mazeGrid[currentLocation[0]][currentLocation[1]] === 3) {
        finish = true;
        let completedLevels = localStorage.getItem('completedLevels');
        // let levelsArray = completedLevels;
        if (completedLevels === null) {
            completedLevels = [];
        } else completedLevels = completedLevels.split(",");
        if (!completedLevels.includes(mazeLevel)) {
            completedLevels.push(mazeLevel);
        }
        localStorage.setItem('completedLevels', completedLevels.join());
    }

    // allows us to change the currentLocation in the mazeGrid
    const move = (deltaY, deltaX) => {
        let Y = currentLocation[0];
        let X = currentLocation[1];

        let newLocation = [Y + deltaY, X + deltaX];
        let gridValue = mazeGrid[newLocation[0]][newLocation[1]];
        // doesn't allow to walk into a wall
        if (canMove(gridValue)) {
            setCurrentLocation(newLocation);
            if (KEYS.includes(gridValue) && !userBag.includes(gridValue)) {
                setUserBag([...userBag, gridValue])
            }
        }
    };

    const canMove = (gridValue) => {
        let haveKey = userBag.some((key) => {
            return key * 11 === gridValue
        });
        //cannot step on wall or empty space
        if (gridValue === 1 || gridValue === 0) {
            return false
        }
        //allow to step on the path/ finish or on the keys
        if (gridValue === 2 || gridValue === 3 || KEYS.includes(gridValue)) {
            return true
        }
        return haveKey
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
        playerLost,
        userBag
    }
};

export default useMaze;
