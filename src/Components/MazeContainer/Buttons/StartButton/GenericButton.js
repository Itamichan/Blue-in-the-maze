import React from 'react';

import {Button} from "reactstrap";
import './GenericButton.scss';


const GenericButton = ({changeScreen, children}) => {
    return (
        <Button id={'generic-button'}
        onClick={changeScreen}
        >
            {children}
        </Button>

    )
};

export default GenericButton;