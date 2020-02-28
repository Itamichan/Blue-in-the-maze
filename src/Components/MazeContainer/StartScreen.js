import React, {Fragment} from 'react';
import PlainScreen from "../Layout/PlainScreen/PlainScreen";
import GenericButton from "./Buttons/GenericButton/GenericButton";


const StartScreen = ({onStartClick}) => {

    return (
        <Fragment>
            <PlainScreen
                screenBackground={process.env.PUBLIC_URL + "/resources/intro-image.png"}>
                <h1
                    className={'text-header'}>
                    Blue in the Maze
                </h1>
                <GenericButton
                    changeScreen={onStartClick}>
                    Start
                </GenericButton>
            </PlainScreen>

        </Fragment>

    )
};

export default StartScreen;