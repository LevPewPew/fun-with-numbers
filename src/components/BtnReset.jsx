import React, {useEffect} from 'react';

function BtnReset(props) {
  console.log(props.setCounter);
  return (
    <button onClick={() => props.setCounter(0)}>RESET</button>
  )
}

export default BtnReset;
