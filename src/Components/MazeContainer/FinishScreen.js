import React, {Fragment} from 'react';
import PlainScreen from "../Layout/PlainScreen/PlainScreen";
import GenericButton from "./Buttons/GenericButton/GenericButton";


const FinishScreen = ({gameResult, onRepeatLevel, onNewLevel}) => {

    //todo the finish time is wrong should be the time past not time remained

    return (
        <Fragment>
            <PlainScreen
                screenBackground={process.env.PUBLIC_URL + "/resources/win-screen.png"}>
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