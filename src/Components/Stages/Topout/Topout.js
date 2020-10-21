import React from 'react';
import './Topout.css';

const Topout = props => {
  return (
      <div className="Topout">
        <h1>Topout</h1>
        <p onClick={props.click}>Topout for address: {props.address}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.address} />
      </div>
  )
};

export default Topout;