import React, {Fragment} from 'react';
import PlainScreen from "../../Layout/PlainScreen/PlainScreen";
import PropTypes from 'prop-types';
import GenericButton from "../Buttons/GenericButton/GenericButton";
import {LEVELS} from "./levels";
import './LevelSelection.scss';

const LevelSelection = ({chooseLevel}) => {





    let availableLevel = Object.keys(LEVELS).map((i, idx) => {
        let levelDifficulty;
        levelDifficulty = `Level ${idx + 1}`;
        return (
            <div>
                <GenericButton
                    changeScreen={() => chooseLevel(i)}
                    key={`level ${idx + 1}`}
                    disabled={false}
                >
                    {levelDifficulty}
                </GenericButton>
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