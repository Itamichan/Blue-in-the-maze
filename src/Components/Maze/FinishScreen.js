import React, {Fragment} from 'react';
import StartButton from "../Buttons/StartButton/StartButton";
import '../Maze/StartGame/StartScreen.scss';

const FinishScreen = ({startClicked}) => {

    return (
        <Fragment>
            <div id={'startScreen'}>
                <img src="intro-image.png" alt="game image"/>
                <div id={'gameName'}>
                    Finish screen
                </div>
                <StartButton start={startClicked}/>
            </div>
        </Fragment>
    )
};

export default FinishScreen;