import React from 'react';
import './App.css';
import { MobXProvider } from './store/mobx';
import { CounterRedux } from './pages/CounterRedux/CounterRedux';
import { CounterMobX } from './pages/CounterMobX/CounterMobX';

function App() {
  return (
    <div className="App">
      <MobXProvider>
        <CounterMobX />
        <CounterMobX />
      </MobXProvider>
    </div>
  );
}

export default App;
