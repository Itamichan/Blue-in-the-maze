import {useEffect, useState} from "react";
import {LEVELS, KEYS} from "./LevelSelection/levels";

const useMaze = (mazeLevel, onPlayerLose) => {

    const mazeGrid = LEVELS[mazeLevel].levelGrid;
    const timeLeft = LEVELS[mazeLevel].timeLeft;

    //identifies if the timer should count up or down
    const countDirection = timeLeft === undefined ? 'up' : 'down';


    // keeps track of user's location
    const [currentLocation, setCurrentLocation] = useState(LEVELS[mazeLevel].levelStart);
    const [startTime, setStartTime] = useState(new Date());

    //keeps track of collected keys
    const [userBag, setUserBag] = useState([]);

    //sets the start time for the timer
    const [screenTime, setScreenTime] = useState(countDirection === 'up' ? 0 : timeLeft);
    const [playerLost, setPlayerLost] = useState(false);

    //updates the timer in dependence of the countDirection
    let updateScreenTime = () => {
        let timeDifference = (new Date() - startTime) / 1000;
        let newScreenTime = countDirection === 'up' ? timeDifference : timeLeft - timeDifference;
        //checks when the timeLeft expires
        if (countDirection === 'down' && screenTime < 1) {
            setPlayerLost(true);
        }
        setScreenTime(Math.floor(newScreenTime))
    };

    //runs the updateScreenTime function every 50ms
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

    let finishTime;
    if (countDirection === 'up') {
        finishTime = screenTime
    } else {finishTime = timeLeft - screenTime}


    // initialization of finish var and setting the condition when it becomes true
    let finish = false;
    if (mazeGrid[currentLocation[0]][currentLocation[1]] === 3) {
        finish = true;
        //accesses the local storage to see if a level have been finished if not the level is added
        //to the local storage once

        //todo create a different js file which will have two functions: one write to local storage and another reads
        let completedLevels = localStorage.getItem('completedLevels');
        if (completedLevels === null) {
            completedLevels = [];
        } else {
            completedLevels = completedLevels.split(",");
        }
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
        //
        if (canMove(gridValue)) {
            setCurrentLocation(newLocation);
            //adds the key to the userBag if the player doesn't have it
            if (KEYS.includes(gridValue) && !userBag.includes(gridValue)) {
                setUserBag([...userBag, gridValue])
            }
        }
    };

    //sets when the player can walk and when not
    const canMove = (gridValue) => {
        //checks if the player has the key to pass the door
        let haveKey = userBag.some((key) => {
            return key * 11 === gridValue
        });
        //cannot step on wall or empty space
        if (gridValue === 1 || gridValue === 0) {
            return false
        }
        //allows to step on the path/ finish/ keys
        if (gridValue === 2 || gridValue === 3 || KEYS.includes(gridValue)) {
            return true
        }
        return haveKey
    };

    //all 4 functions bellow specifies in which direction the player will move
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
        screenTime,
        playerLost,
        userBag,
        up,
        down,
        right,
        left,
        finishTime
    }
};

export default useMaze;
