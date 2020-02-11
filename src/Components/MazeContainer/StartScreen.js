import React, {Fragment} from 'react';
import PlainScreen from "../Layout/PlainScreen/PlainScreen";
import GenericButton from "./Buttons/GenericButton/GenericButton";


const StartScreen = ({onStartClick}) => {

    return (
        <Fragment>
            <PlainScreen
                screenBackground="./intro-image.png">
                <h1>Blue in the Maze</h1>
                <GenericButton
                    changeScreen={onStartClick}>
                    Start
                </GenericButton>
            </PlainScreen>

        </Fragment>

    )
};

export default StartScreen;