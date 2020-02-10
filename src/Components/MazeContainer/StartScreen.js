import React, {Fragment} from 'react';
import GameScreen from "../Layout/PlainScreen/PlainScreen";
import StartButton from "./Buttons/StartButton/StartButton";


const StartScreen = ({onStartClick}) => {

    return (
        <Fragment>
            <GameScreen
                screenBackground="./intro-image.png">
                <h1>header</h1>
                <p id={'textBox'}>text area</p>
                <StartButton
                    changeScreen={onStartClick}
                    buttonName={'Start'}
                />
            </GameScreen>

        </Fragment>

    )
};

export default StartScreen;