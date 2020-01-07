import React, { useState } from 'react';
import '../styles/BtnPause.css';

function BtnPause(props) {
  const [running, setRunning] = useState(true);

  return (
    <div className="BtnPause">
      <button style={running ? {background: "red"} : {background: "green"}}
        onClick={() => {
          if (running) {
            clearTimeout(props.timer.current);
            setRunning(false);
          } else {
            props.timer.current = setTimeout(() => props.setCounter(props.counter + 1), props.DELAY);
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
