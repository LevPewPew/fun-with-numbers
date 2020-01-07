import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import ErrorDisplay from './ErrorDisplay';

const SECONDS_PER_FACT = 3;

function DataDisplay(props) {
  const [factNum, setFactNum] = useState(0);
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
      }
    });
  }

  useEffect(() => {
    if (props.counter % SECONDS_PER_FACT === 0) {
      if (props.counter === 0) {
        setFactNum(1);
        getTrivia(0);
      } else {
        setFactNum(factNum + 1);
        getTrivia(factNum);
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