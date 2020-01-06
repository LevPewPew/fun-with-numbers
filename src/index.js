import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';
import DataDisplay from './components/DataDisplay';
import BtnPause from './components/BtnPause';
import BtnReset from './components/BtnReset';
import BtnRandom from './components/BtnRandom';

const DELAY = 1000;

function App() {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    setTimeout(() => setCounter(counter + 1), DELAY);
  });

  return (
    <div className="app-container">
      <Counter
        counter={counter}
      />
      <DataDisplay
        counter={counter}
      />
      <BtnPause
        counter={counter}
        setCounter={setCounter}
      />
      <BtnReset
        counter={counter}
      />
      <BtnRandom
        counter={counter}
      />
    </div>
  )
}

render(<App />, document.getElementById("root"));