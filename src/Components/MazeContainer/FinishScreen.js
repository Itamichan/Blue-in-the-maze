import React, {Fragment} from 'react';
import PlainScreen from "../Layout/PlainScreen/PlainScreen";
import GenericButton from "./Buttons/GenericButton/GenericButton";


const FinishScreen = ({gameResult, onRepeatLevel, onNewLevel}) => {

    return (
        <Fragment>
            <PlainScreen
                screenBackground="./bg-for-screen-state.png">
                <h1>Finish screen</h1>
                <div>{gameResult}</div>
                <GenericButton
                    changeScreen={onRepeatLevel}
                >Try again!</GenericButton>
                <GenericButton
                    changeScreen={onNewLevel}
                >New level</GenericButton>
            </PlainScreen>
        </Fragment>

    )
};

export default FinishScreen;