import React, {Fragment} from 'react';
import StartButton from "../Buttons/StartButton/StartButton";
import '../StartScreen/StartScreen.scss';

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