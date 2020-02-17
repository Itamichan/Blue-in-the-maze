import React, {Fragment} from 'react';
import PlainScreen from "../../Layout/PlainScreen/PlainScreen";
import PropTypes from 'prop-types';
import {LEVELS} from "./levels";
import './LevelSelection.scss';
import LevelButton from "../Buttons/LevelButton";

const LevelSelection = ({chooseLevel}) => {


    let finishedLevels = localStorage.getItem('completedLevels');
    if (finishedLevels === null) {
        finishedLevels = []
    } else finishedLevels = finishedLevels.split(",");


    let gameLevels = Object.keys(LEVELS);
    let notPlayedLevel = gameLevels.filter((level) => !finishedLevels.includes(level));

    console.log(finishedLevels);
    console.log(notPlayedLevel);


    let availableLevel = Object.keys(LEVELS).map((i, idx) => {
        let disabled = false;

        let levelName;
        levelName = `Level ${idx + 1}`;

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
            <div>
                <LevelButton
                    changeScreen={() => chooseLevel(i)}
                    key={`level ${idx + 1}`}
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
                screenBackground="./bg-for-screen-state.png"
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