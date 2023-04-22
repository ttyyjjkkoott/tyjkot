import React from 'react';
import './Spinner.css';

const Spinner = ({ fading }) => {
    return (
      <div className={`spinner ${fading ? 'fading' : ''}`}>
        <div className="circle"></div>
      </div>
    );
  };
  

export default Spinner;
