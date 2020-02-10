import React, {Fragment} from 'react';
import './GameScreen.scss';

const GameScreen = ({textArea, screenHeader, screenBackground, children}) => {

    return (
        <Fragment>
            <div id={'game-screen'}>
                <img src={screenBackground} alt="background image"/>
                <div className={'screenHead'}>{children}</div>

            </div>
        </Fragment>
    )
};

export default GameScreen;