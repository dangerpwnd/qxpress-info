import React from 'react';
import './Trim.css';

const Trim = props => {
  return (
      <div className="Trim">
        <h1>Trim</h1>
        <p onClick={props.click}>Trim for address: {props.address}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.address} />
      </div>
  )
};

export default Trim;