import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { baseCss } from './CounterRedux.style';
import { RootState } from '../../store/redux';
import { increase, decrease } from '../../store/redux/CounterStoreDucks';

export const CounterRedux = (): ReactElement => {
  const counterState = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="CounterRedux" css={[baseCss]}>
      <div className="container">
        <div className="wrapper">
          <div>Redux Counter</div>
          <div className="counter-value">{counterState.number}</div>
          <div className="btn-wrapper">
            <button type="button" onClick={() => dispatch(increase())}>
              +
            </button>
            <button type="button" onClick={() => dispatch(decrease())}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
