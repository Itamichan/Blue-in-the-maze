import React, {Fragment} from 'react';
import PlainScreen from "../../Layout/PlainScreen/PlainScreen";
import PropTypes from 'prop-types';
import {LEVELS} from "./levels";
import './LevelSelection.scss';
import LevelButton from "../Buttons/LevelButton/LevelButton";

const LevelSelection = ({chooseLevel}) => {

    //retrieving the data from the local storage
    let finishedLevels = localStorage.getItem('completedLevels');
    if (finishedLevels === null) {
        finishedLevels = []
    } else {
        finishedLevels = finishedLevels.split(",");
    }

    //identifies which levels the player didn't play yet
    let gameLevels = Object.keys(LEVELS);
    let notPlayedLevel = gameLevels.filter((level) => {
        return !finishedLevels.includes(level)
    });

    let availableLevel = Object.keys(LEVELS).map((i, idx) => {
        let disabled = false;

        //renders the button's name
        let levelName = `Level ${idx + 1}`;

        //checks what's the state of the button based on the fact if
        //a level was finished or not and which level should be available next
        let levelState;
        if (finishedLevels.includes(i)) {
            levelState = 'levelCompleted'
        }
        if (notPlayedLevel.includes(i) && i === notPlayedLevel[0]) {
            levelState = 'nextLevel'
        }
        if (notPlayedLevel.includes(i) && i !== notPlayedLevel[0]) {
            levelState = 'unavailableLevel';
            disabled = true
        }
        return (
            <div key={`level ${idx + 1}`}>
                <LevelButton
                    changeScreen={() => chooseLevel(i)}
                    buttonLook={levelState}
                    buttonDisabled={disabled}
                >
                    {levelName}
                </LevelButton>
            </div>
        )
    });


    return (
        <Fragment>
            <PlainScreen
                screenBackground={process.env.PUBLIC_URL + "/resources/bg-for-screen-state.png"}
            >
                <h1>Select a level</h1>
                <div className={'level-button-container'}>
                    {availableLevel}
                </div>

            </PlainScreen>

        </Fragment>
    )
};

LevelSelection.prototype = {
    chooseLevel: PropTypes.func.isRequired
};

export default LevelSelection;