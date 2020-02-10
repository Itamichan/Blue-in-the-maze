import React from 'react';

import {Button} from "reactstrap";
import './StartButton.scss';


const StartButton = ({start}) => {
    return (
        <Button id={'startButton'}
        onClick={start}
        >
            Start
        </Button>

    )
};

export default StartButton;