import React from 'react';

function BtnReset(props) {
  return (
    <div className="BtnReset">
      <button
        onClick={() => {
          clearTimeout(props.timer.current);
          props.setCounter(0);
        }}
      >
        RESET
      </button>
    </div>
  )
}

export default BtnReset;
