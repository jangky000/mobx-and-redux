import React from 'react';
import './App.css';
import { MobXProvider } from './store/mobx';
import { CounterMobX } from './pages/CounterMobX/CounterMobX';
import { ReduxProvider } from './store/redux';
import { CounterRedux } from './pages/CounterRedux/CounterRedux';

function App() {
  return (
    <div className="App">
      <MobXProvider>
        <ReduxProvider>
          <CounterMobX />
          <CounterRedux />
        </ReduxProvider>
      </MobXProvider>
    </div>
  );
}

export default App;
