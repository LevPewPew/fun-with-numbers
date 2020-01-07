import React from 'react';

function BtnRandom(props) {
  return (
    <div className="BtnRandom">
      <button
        onClick={() => {
          clearTimeout(props.timer.current);
          props.setCounter(Math.floor(Math.random() * 35001));
        }}
      >
        RANDOM
      </button>
    </div>
  )
}

export default BtnRandom;
