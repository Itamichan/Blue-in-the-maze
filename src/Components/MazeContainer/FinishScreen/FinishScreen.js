import React, {Fragment} from 'react';
import PlainScreen from "../../Layout/PlainScreen/PlainScreen";
import GenericButton from "../Buttons/GenericButton/GenericButton";
import "./FinishScreen.scss";


const FinishScreen = ({gameResult, onRepeatLevel, onNewLevel}) => {
    return (
        <Fragment>
            <PlainScreen
                screenBackground={process.env.PUBLIC_URL + "/resources/win-screen.png"}>
                <h1
                    className={'text-header'}>
                    Victory!
                </h1>
                <div className={'text-default'}>
                    {gameResult}
                </div>
                <div id={'finish-buttons-container'} className={'text-default'}>
                    <GenericButton
                        changeScreen={onRepeatLevel}
                    >Try again!</GenericButton>
                    <GenericButton
                        changeScreen={onNewLevel}
                    >New level</GenericButton>
                </div>
            </PlainScreen>
        </Fragment>
    )
};

export default FinishScreen;