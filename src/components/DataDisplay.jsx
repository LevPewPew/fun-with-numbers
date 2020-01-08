import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import ErrorDisplay from './ErrorDisplay';

const SECONDS_PER_FACT = 3;

function DataDisplay(props) {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  function getTrivia(num) {
    Axios.get(`http://numbersapi.com/${num}/trivia`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      if (err.response) {
        setError(err.response.statusText);
      } else {
        setError("Error!");
      }
    });
  }

  // could potentially move some or all of the setFactNum logic into the buttons, but it is actually good to have it in here if there are multiple things that could reset
  useEffect(() => {
    if (props.counter.value % SECONDS_PER_FACT === 0) {
      if (props.counter.value === 0) {
        props.setFactNum(1);
        getTrivia(0);
      } else {
        props.setFactNum(props.factNum + 1);
        getTrivia(props.factNum);
      }
    }
  }, [props.counter]);

  return (
    <div className="DataDisplay">
      <div>
        {
          error ? 
          <ErrorDisplay
            error={error}
          /> :
          data
        }
      </div>
    </div>
  );
}

export default DataDisplay;