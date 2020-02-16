import React from 'react';

import { BinaryClock, DigitalClock } from './components';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <BinaryClock />
      <DigitalClock />
    </div>
  );
}

export default App;