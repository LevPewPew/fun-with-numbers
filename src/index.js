import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import DataDisplay from './components/DataDisplay';
import BtnPause from './components/BtnPause';
import BtnReset from './components/BtnReset';
import BtnRandom from './components/BtnRandom';

const DELAY = 1000;

function App() {
  const [counter, setCounter] = useState(0);
  const [factNum, setFactNum] = useState(0);
  const timer = useRef(false);
  
  useEffect(() => {
    timer.current = setTimeout(() => setCounter(counter + 1), DELAY);
  }, [counter]);

  return (
    <div className="app-container">
      <Counter
        counter={counter}
      />
      <DataDisplay
        counter={counter}
        factNum={factNum}
        setFactNum={setFactNum}
        />
      <BtnPause
        counter={counter}
        setCounter={setCounter}
        timer={timer}
        />
      <BtnReset
        counter={counter}
        setCounter={setCounter}
        timer={timer}
        DELAY={DELAY}
        />
      <BtnRandom
        counter={counter}
        setCounter={setCounter}
        timer={timer}
        factNum={factNum}
        setFactNum={setFactNum}
      />
    </div>
  )
}

render(<App />, document.getElementById("root"));

{/* <button onClick={() => props.setCounter(0)}>RESET</button> */}