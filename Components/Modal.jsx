import React from 'react';

const Modal = ({ notes, show }) => {
  console.log(show);
  if (!show) {
    return null;
  }
  return (
    <div>
      <h2>Job Notes</h2>
      <p>{notes}</p>
      <button>Close</button>
    </div>
  );
};

export default Modal;
