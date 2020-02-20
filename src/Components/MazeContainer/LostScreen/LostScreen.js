import React from 'react';
import PlainScreen from "../../Layout/PlainScreen/PlainScreen";
import GenericButton from "../Buttons/GenericButton/GenericButton";
import './LostScreen.scss';

const LostScreen = ({onRepeatLevel, onNewLevel}) => {
    return (
        <PlainScreen
            screenBackground={process.env.PUBLIC_URL + "/resources/lost-screen.png"}
        >
            <h1>You lost!</h1>
            <div id={'lost-buttons-container'}>
                <GenericButton
                    changeScreen={onRepeatLevel}
                >Try again!</GenericButton>
                <GenericButton
                    changeScreen={onNewLevel}
                >New level</GenericButton>
            </div>

        </PlainScreen>
    )
};

export default LostScreen;