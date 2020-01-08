import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function BtnReset() {
  const timerId = useSelector((state) => state.timerId);
  const dispatch = useDispatch();

  return (
    <div className="BtnReset">
      <button
        onClick={() => {
          clearTimeout(timerId);
          dispatch({type: "UPDATE_COUNTER", newCounter: {value: 0}});
        }}
      >
        RESET
      </button>
    </div>
  )
}

export default BtnReset;
