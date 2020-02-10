import React from 'react';

import {Button} from "reactstrap";
import './StartButton.scss';


const StartButton = ({changeScreen}) => {
    return (
        <Button id={'startButton'}
        onClick={changeScreen}
        >
            Start
        </Button>

    )
};

export default StartButton;