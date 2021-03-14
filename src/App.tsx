import React from 'react';
import './App.css';
import { CounterRedux } from './pages/CounterRedux/CounterRedux';
import { CounterMobX } from './pages/CounterMobX/CounterMobX';

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100vh' }}>
      <CounterMobX />
    </div>
  );
}

export default App;
