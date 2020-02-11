import React, {Fragment} from 'react';
import GameScreen from "../Layout/PlainScreen/PlainScreen";
import StartButton from "./Buttons/StartButton/GenericButton";


const FinishScreen = ({gameResult}) => {

    return (
        <Fragment>
            <GameScreen
                screenBackground="./bg-for-screen-state.png"
                screenHeader="Finish screen"
                textArea={gameResult}
            />
            <StartButton
                buttonName={'Finish'}
            />

        </Fragment>

    )
};

export default FinishScreen;