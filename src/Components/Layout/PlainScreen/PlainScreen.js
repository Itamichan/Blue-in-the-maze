import React, {Fragment} from 'react';
import './PlainScreen.scss';

const PlainScreen = ({screenBackground, children}) => {

    return (
        <Fragment>
            <div id={'plain-screen'}>
                <img src={screenBackground} alt="background"/>
                <div className={'screenHead'}>{children}</div>
            </div>
        </Fragment>
    )
};

export default PlainScreen;