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


    let getNextLevel = Object.keys(LEVELS);
    let filteredLevels = getNextLevel.filter((level) => !finishedLevels.includes(level));

    console.log(finishedLevels);
    console.log(filteredLevels);


    let availableLevel = Object.keys(LEVELS).map((i, idx) => {
        let disabled = false;

        let levelName;
        levelName = `Level ${idx + 1}`;

        let levelStyle;
        if (finishedLevels.includes(i)) {
            levelStyle = 'levelCompleted'
        }
        if (filteredLevels.includes(i) && i === filteredLevels[0]) {
            levelStyle = 'nextLevel'
        }
        if (filteredLevels.includes(i) && i !== filteredLevels[0]) {
            levelStyle = 'unavailableLevel';
            disabled = true
        }
        return (
            <div>
                <LevelButton
                    changeScreen={() => chooseLevel(i)}
                    key={`level ${idx + 1}`}
                    // disabled={disabled}
                    levelStyle={levelStyle}
                    disabled={disabled}
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