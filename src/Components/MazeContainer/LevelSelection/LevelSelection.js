import React, {Fragment} from 'react';
import PlainScreen from "../../Layout/PlainScreen/PlainScreen";
import PropTypes from 'prop-types';
import GenericButton from "../Buttons/GenericButton/GenericButton";
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

        return <GenericButton
            changeScreen={() => chooseLevel(i)}
            key={`level ${idx + 1}`}>
            {levelDifficulty}
        </GenericButton>;
    });


    return (
        <Fragment>
            <PlainScreen
                screenBackground="./bg-for-screen-state.png"
            >
                <h1>Level selection screen</h1>
                {availableLevel}
            </PlainScreen>

        </Fragment>
    )
};

LevelSelection.prototype = {
    chooseLevel: PropTypes.func.isRequired
};

export default LevelSelection;