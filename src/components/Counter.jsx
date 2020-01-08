import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const DELAY = useSelector((state) => state.DELAY);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    let id = setTimeout(() => dispatch({
      type: "UPDATE_COUNTER",
      newCounter: {value: counter.value + 1}
    }), DELAY);

    dispatch({type: "UPDATE_TIMER_ID", newTimerId: id});
  }, [counter]);

  return (
    <div className="Counter">
      <p>{counter.value}</p>
    </div>
  );
}

export default Counter;