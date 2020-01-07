import React from 'react';

function Counter(props) {
  return (
    <div className="Counter">
      <p>{Math.floor(props.counter)}</p>
    </div>
  );
}

export default Counter;