import React from 'react';

import {Button} from "reactstrap";
import './StartButton.scss';


const StartButton = ({changeScreen, buttonName}) => {
    return (
        <Button id={'startButton'}
        onClick={changeScreen}
        >
            {buttonName}
        </Button>

    )
};

export default StartButton;