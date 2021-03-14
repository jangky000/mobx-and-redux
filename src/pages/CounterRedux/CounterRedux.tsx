import React, { ReactElement } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { baseCss } from './CounterRedux.style';

export const CounterRedux = (): ReactElement => {
  const number = 0;
  return (
    <div className="CounterRedux" css={[baseCss]}>
      <div className="container">
        <div className="wrapper">
          <div className="counter-value">{number}</div>
          <div className="btn-wrapper">
            <button type="button"> + </button>
            <button type="button"> - </button>
          </div>
        </div>
      </div>
    </div>
  );
};
