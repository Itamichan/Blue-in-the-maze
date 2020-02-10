import React, {Fragment} from 'react';
import GameScreen from "../../Layout/GameScreen/GameScreen";
import PropTypes from 'prop-types';
import StartButton from "../Buttons/StartButton/StartButton";
import {LEVELS} from "./levels";

const LevelSelection = ({chooseLevel}) => {

    let levelsArray = Object.keys(LEVELS).map((i, idx) => {

        return <StartButton
            buttonName={`level ${idx+1}`}
            changeScreen={() => chooseLevel(i)}
            key={`level ${idx+1}`}
        />;
    });


    return (
        <Fragment>
            <div id={'game-screen'}>
                <img src="./bg-for-screen-state.png" alt="background image"/>
                <h1>Level selection screen</h1>
                {levelsArray}
            </div>
        </Fragment>
    )
};

LevelSelection.prototype = {
    chooseLevel: PropTypes.func.isRequired
};

export default LevelSelection;