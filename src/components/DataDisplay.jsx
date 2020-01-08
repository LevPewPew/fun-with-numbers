import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { shallowEqual } from '@babel/types';
import ErrorDisplay from './ErrorDisplay';

const SECONDS_PER_FACT = 3;

function DataDisplay() {
  const counter = useSelector((state) => state.counter);
  const factNum = useSelector((state) => state.factNum);
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (counter.value % SECONDS_PER_FACT === 0) {
      if (counter.value === 0) {
        dispatch({type: "UPDATE_FACT_NUM", newFactNum: 1})
        getTrivia(0);
      } else {
        dispatch({type: "UPDATE_FACT_NUM", newFactNum: factNum + 1})
        getTrivia(factNum);
      }
    }
  }, [counter]);

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