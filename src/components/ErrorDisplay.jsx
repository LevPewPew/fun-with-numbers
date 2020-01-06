import React from 'react';

function ErrorDisplay(props) {
  return (
    <div className="ErrorDisplay">{props.error}</div>
  );
}

export default ErrorDisplay;