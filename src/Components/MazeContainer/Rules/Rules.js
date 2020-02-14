import React, {Fragment} from 'react';
import './Rules.scss';


const Rules = ({onReadRules}) => {

    return (
        <Fragment>
            <div
                id={'rules'}
                onClick={() => onReadRules(true)}

            >Rules</div>

        </Fragment>

    )
};

export default Rules;