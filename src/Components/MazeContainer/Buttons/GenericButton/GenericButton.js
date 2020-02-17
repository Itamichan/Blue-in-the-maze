import React from 'react';

import {Button} from "reactstrap";
import './GenericButton.scss';


const GenericButton = ({changeScreen, children, disabled}) => {
    return (
        <div className={disabled? 'generic-button disabled' : 'generic-button'}
        onClick={disabled? null : changeScreen}
        >
            {children}
        </div>

    )
};

export default GenericButton;