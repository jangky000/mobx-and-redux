import React, { ReactElement, useContext } from 'react';
import { observer } from 'mobx-react-lite';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { baseCss } from './CounterMobX.style';
import { MobXContext } from '../../store/mobx';

export const CounterMobX = observer(
  (): ReactElement => {
    const { counterStore } = useContext(MobXContext);
    return (
      <div className="CounterMobX" css={[baseCss]}>
        <div className="container">
          <div className="wrapper">
            <div>MobX Counter</div>
            <div className="counter-value">{counterStore.number}</div>
            <div className="btn-wrapper">
              <button type="button" onClick={counterStore.increase}>
                +
              </button>
              <button type="button" onClick={counterStore.decrease}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
