import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { baseCss } from './CounterMobX.style';
// import { counterStore } from '../../store/mobx/CounterStoreClass1';
import { counterStore } from '../../store/mobx/CounterStoreClass2';
// import { counterStore } from '../../store/mobx/CounterStoreObject';

export const CounterMobX = observer(
  (): ReactElement => {
    return (
      <div className="CounterMobX" css={[baseCss]}>
        <div className="container">
          <div className="wrapper">
            <div className="counter-value">{counterStore.number}</div>
            <div className="btn-wrapper">
              <button type="button" onClick={() => counterStore.increase()}>
                +
              </button>
              <button type="button" onClick={() => counterStore.decrease()}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
