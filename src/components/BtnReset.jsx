import React from 'react';

function BtnReset(props) {
  return (
    <div className="BtnReset">
      <button
        onClick={() => {
          clearTimeout(props.timer.current);
          // this + random number is so that the useEffect in data is forced to chance when Reset is hit twice in quick succession, forcing a new set time out, the math.floors in other files deal with this to keep it integer, if it happens to be two same randoms, very unlikely, it will crash, there is probably a better way to do this with some sort of flag state, i couldn't be bothered tho, and also this helps illustrate a problem so i can keep this gotcha in mind for real apps
          props.setCounter(0 + Math.random());
        }}
      >
        RESET
      </button>
    </div>
  )
}

export default BtnReset;
