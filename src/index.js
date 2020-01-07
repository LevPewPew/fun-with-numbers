import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import DataDisplay from './components/DataDisplay';
import BtnPause from './components/BtnPause';
import BtnReset from './components/BtnReset';
import BtnRandom from './components/BtnRandom';

const DELAY = 1000;

function App() {
  // this state is on object instead of just a primitive integer so as to avoid a bug of the setTimeout not being started when hitting the Reset button twice within 1 second. If it was just a primitive, then doing so would mean the counter state has technically not changed and so the useEffect won't trigger the second click of the Reset button.
  const [counter, setCounter] = useState({value: 0}); 
  const [factNum, setFactNum] = useState(0);
  const timer = useRef(false);
  
  useEffect(() => {
    timer.current = setTimeout(() => setCounter({value: counter.value + 1}), DELAY);
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
