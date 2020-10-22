import React from 'react';
import "./Input.css";

const input = ( props ) => {
    let inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />; 
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;

