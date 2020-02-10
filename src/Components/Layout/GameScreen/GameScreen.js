import React, {Fragment} from 'react';
import './GameScreen.scss';

const GameScreen = ({textArea, screenHeader, screenBackground}) => {

    return (
        <Fragment>
            <div id={'game-screen'}>
                <img src={screenBackground} alt="background image"/>
                <h1>{screenHeader}</h1>
                <p id={'textBox'}>{textArea}</p>
            </div>
        </Fragment>
    )
};

export default GameScreen;