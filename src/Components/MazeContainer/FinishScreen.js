import React, {Fragment} from 'react';
import PlainScreen from "../Layout/PlainScreen/PlainScreen";
import GenericButton from "./Buttons/GenericButton/GenericButton";


const FinishScreen = ({gameResult}) => {

    return (
        <Fragment>
            <PlainScreen
                screenBackground="./bg-for-screen-state.png">
                <h1>Finish screen</h1>
                {gameResult}
                <GenericButton>Finish</GenericButton>
            </PlainScreen>
        </Fragment>

    )
};

export default FinishScreen;