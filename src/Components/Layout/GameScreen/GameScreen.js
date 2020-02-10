import React, {Fragment} from 'react';
import './GameScreen.scss';

const GameScreen = ({onButtonClick, screenHeader, screenBackground}) => {

    return (
        <Fragment>
            <div id={'game-screen'}>
                <img src={screenBackground} alt="background image"/>
                <h1>{screenHeader}</h1>
            </div>
        </Fragment>
    )
};

export default GameScreen;