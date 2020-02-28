import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ControlButtons.scss';

import PropTypes from 'prop-types';

const ControlButtons = ({up, left, down, right}) => {
    return (
        <Fragment>
            <div id={'control-buttons'}>
                <div className={'move-buttons button-move-global'} onClick={left}>
                    <FontAwesomeIcon icon="chevron-left"/>
                </div>
                <div className={'move-buttons button-move-global'} onClick={up}>
                    <FontAwesomeIcon icon="chevron-up"/>
                </div>
                <div className={'move-buttons button-move-global'} onClick={down}>
                    <FontAwesomeIcon icon="chevron-down"/>
                </div>
                <div className={'move-buttons button-move-global'} onClick={right}>
                    <FontAwesomeIcon icon="chevron-right"/>
                </div>
            </div>
        </Fragment>
    )
};

ControlButtons.prototype = {
    up: PropTypes.func.isRequired,
    left: PropTypes.func.isRequired,
    down: PropTypes.func.isRequired,
    right: PropTypes.func.isRequired,
};

export default ControlButtons;