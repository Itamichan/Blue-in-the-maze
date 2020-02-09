import React, {Fragment, useState} from 'react';
import StartButton from "../../Buttons/StartButton/StartButton";
import './StartScreen.scss';

const StartScreen = ({startClicked}) => {

    return (
        <Fragment>
            <div id={'startScreen'}>
                <img src="intro-image.png" alt="game image"/>
                <div id={'gameName'}>
                    Blue in the Maze
                </div>
                <StartButton start={startClicked}/>
            </div>
        </Fragment>
    )
};

export default StartScreen;