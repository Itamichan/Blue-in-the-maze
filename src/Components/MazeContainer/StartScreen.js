import React, {Fragment} from 'react';
import GameScreen from "../Layout/GameScreen/GameScreen";
import StartButton from "./Buttons/StartButton/StartButton";


const StartScreen = ({onStartClick}) => {

    return (
        <Fragment>
            <GameScreen
                screenBackground="./intro-image.png"/>
            <StartButton
                changeScreen={onStartClick}
                buttonName={'Start'}
            />
        </Fragment>

    )
};

export default StartScreen;