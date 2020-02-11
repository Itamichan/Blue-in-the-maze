import React from 'react';

import {Button} from "reactstrap";
import './GenericButton.scss';


const GenericButton = ({changeScreen, buttonName}) => {
    return (
        <Button id={'generic-button'}
        onClick={changeScreen}
        >
            {buttonName}
        </Button>

    )
};

export default GenericButton;