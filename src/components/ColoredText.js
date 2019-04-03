import React from 'react';

export default (props) => {
    if(props.active)
        return <div className="colored-text" style={{color: props.color}} >{props.value}</div>

    return <div className="colored-text">{props.value}</div>;
};
    