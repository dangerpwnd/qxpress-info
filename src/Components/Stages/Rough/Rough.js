import React from 'react';
import './Rough.css';

const Rough = props => {

  let search = null;

  if(props.address){
    search = <h2>Rough for address: {props.address}</h2>
  }
  if(props.startDate || props.endDate){
    search = <h2>Rough between {props.startDate} to {props.endDate}</h2>
  }


  return (
      <div className="Rough">
        <h1>Rough</h1>
        {search}
        <h2>Search by either address or date range</h2>
        <div className="Search">
          <input type="text" value={props.address} onChange={props.changeAddress} />
        </div>
        <div className="Search">
          <label>Start date:</label>
          <input type="date" value={props.startDate} onChange={props.changeStartDate} />
          <label>End date:</label>
          <input type="date" value={props.endDate} onChange={props.changeEndDate} />
        </div>
        <button onClick={props.search}>Search</button>
        
      </div>
  )
  }

export default Rough;
