import React from 'react';


import PropTypes from 'prop-types';
import GameScreen from "../../Layout/GameScreen/GameScreen";

const LevelSelection = ({chooseLevel}) => {


    return (
        <GameScreen
            screenBackground="./intro-image.png"
            screenHeader="Level selection screen"
            onButtonClick={() => chooseLevel('level2')}
        />
    )
};

LevelSelection.prototype = {
    chooseLevel: PropTypes.func.isRequired
};

export default LevelSelection;