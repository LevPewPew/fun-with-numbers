import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import DataDisplay from './components/DataDisplay';
import BtnPause from './components/BtnPause';
import BtnReset from './components/BtnReset';
import BtnRandom from './components/BtnRandom';

const initState = {
  // using object for counter as using a primitive integer results in a bug trying to reset twice within one second
  DELAY: 1000,
  counter: {value: 0},
  factNum: 0,
  timerId: null
}

const reducer = (state = initState, action) => {
  let newState = {};

  switch(action.type) {
    case "UPDATE_COUNTER":
      newState = {...state, counter: action.newCounter};
      break;
    case "UPDATE_FACT_NUM":
      newState = {...state, factNum: action.newFactNum};
      break;
    case "UPDATE_TIMER_ID":
      newState = {...state, timerId: action.newTimerId};
      break;
    default:
      newState = {...state};
  }

  return newState;
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <DataDisplay />
      <BtnPause />
      <BtnReset />
      <BtnRandom />
    </Provider>
  )
}

render(<App />, document.getElementById("root"));
