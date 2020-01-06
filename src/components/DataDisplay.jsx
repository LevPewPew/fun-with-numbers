import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import ErrorDisplay from './ErrorDisplay';

const SECONDS_PER_FACT = 3;

function DataDisplay(props) {
  const [factNum, setFactNum] = useState(0);
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (props.counter % SECONDS_PER_FACT === 0) {
      Axios.get(`http://numbersapi.com/${factNum}/trivia`)
        .then((res) => {
          setData(res.data);
          setFactNum(factNum + 1);
        })
        .catch((err) => {
          setError(err.response.statusText);
        });
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