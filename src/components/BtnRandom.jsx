import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function BtnRandom() {
  const timerId = useSelector((state) => state.timerId);
  const dispatch = useDispatch();

  return (
    <div className="BtnRandom">
      <button
        onClick={() => {
          clearTimeout(timerId);
          let randNum = Math.floor(Math.random() * 35001);
          dispatch({type: "UPDATE_COUNTER", newCounter: {value: randNum}});
          dispatch({type: "UPDATE_FACT_NUM", newFactNum: randNum});
        }}
      >
        RANDOM
      </button>
    </div>
  )
}

export default BtnRandom;
