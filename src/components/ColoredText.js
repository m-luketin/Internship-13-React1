import React from 'react';

export default (props) => {
    return <div className="colored-text" style={{color: props.color}} >{props.label}</div>
};
    