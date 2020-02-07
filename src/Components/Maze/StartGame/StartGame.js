import React, {Fragment} from 'react';
import StartButton from "../../Buttons/StartButton/StartButton";
import './StartGame.scss';

const StartGame = (props) => {
    return (
        <Fragment>
            <div id={'startGame'}>
                <StartButton/>
            </div>
        </Fragment>
    )
};

export default StartGame;