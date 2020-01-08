import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/BtnPause.css';

function BtnPause() {
  const DELAY = useSelector((state) => state.DELAY);
  const counter = useSelector((state) => state.counter);
  const timerId = useSelector((state) => state.timerId);
  const dispatch = useDispatch();
  const [running, setRunning] = useState(true);

  return (
    <div className="BtnPause">
      <button style={running ? {background: "red"} : {background: "green"}}
        onClick={() => {
          if (running) {
            clearTimeout(timerId);
            setRunning(false);
          } else {
            let id = setTimeout(() => dispatch({
              type: "UPDATE_COUNTER",
              newCounter: {value: counter.value + 1}
            }), DELAY);
            dispatch({type: "UPDATE_TIMER_ID", newTimerId: id});
            setRunning(true);
          }
        }}
      >
        PAUSE
      </button>
    </div>
  )
}

export default BtnPause;
