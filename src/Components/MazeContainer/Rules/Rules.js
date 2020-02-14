import React from 'react';
import './Rules.scss';


const Rules = ({onReadRules}) => {
    return (
        <div
            id={'rules'}
            onClick={onReadRules}

        >Rules</div>
    )
};

export default Rules;