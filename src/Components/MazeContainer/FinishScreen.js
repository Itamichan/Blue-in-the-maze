import React, {Fragment} from 'react';
import GameScreen from "../Layout/GameScreen/GameScreen";
import StartButton from "./Buttons/StartButton/StartButton";


const FinishScreen = (props) => {

    return (
        <Fragment>
            <GameScreen
                screenBackground="./bg-for-screen-state.png"
                screenHeader="Finish screen"
            />
            <StartButton
                buttonName={'Finish'}
            />
        </Fragment>

    )
};

export default FinishScreen;