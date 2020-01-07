import React from 'react';

function BtnRandom(props) {
  return (
    <div className="BtnRandom">
      <button
        onClick={() => {
          let randNum = Math.floor(Math.random() * 35001);
          clearTimeout(props.timer.current);
          props.setCounter(randNum);
          props.setFactNum(randNum);
        }}
      >
        RANDOM
      </button>
    </div>
  )
}

export default BtnRandom;
