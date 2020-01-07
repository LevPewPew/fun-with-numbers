import React from 'react';

function Counter(props) {
  return (
    <div className="Counter">
      <p>{props.counter.value}</p>
    </div>
  );
}

export default Counter;