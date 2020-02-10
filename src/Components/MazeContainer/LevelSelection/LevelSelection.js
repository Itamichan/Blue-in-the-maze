import React, {Fragment} from 'react';
import GameScreen from "../../Layout/GameScreen/GameScreen";
import PropTypes from 'prop-types';
import StartButton from "../Buttons/StartButton/StartButton";
import {LEVELS} from "./levels";

const LevelSelection = ({chooseLevel}) => {

    let availableLevel = Object.keys(LEVELS).map((i, idx) => {

        let levelDifficulty;
        if (idx === 0) {
            levelDifficulty = 'Easy'
        } else if (idx === 1) {
            levelDifficulty = 'Medium'
        } else if (idx === 2) {
            levelDifficulty = 'Hard'
        }


        return <StartButton
            buttonName={levelDifficulty}
            changeScreen={() => chooseLevel(i)}
            key={`level ${idx+1}`}
        />;
    });


    return (
        <Fragment>
            <GameScreen
                screenBackground="./bg-for-screen-state.png"
                screenHeader={'Level selection screen'}
            />
                {availableLevel}
        </Fragment>
    )
};

LevelSelection.prototype = {
    chooseLevel: PropTypes.func.isRequired
};

export default LevelSelection;