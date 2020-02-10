import React, {Fragment} from 'react';
import StartButton from "../Buttons/StartButton/StartButton";
import './StartScreen.scss';

const StartScreen = ({startClicked}) => {

    return (
        <Fragment>
            <div id={'startScreen'}>
                <img src="intro-image.png" alt="game intro image"/>
                <StartButton start={startClicked}/>
            </div>
        </Fragment>
    )
};

export default StartScreen;