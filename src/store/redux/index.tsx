import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './CounterStoreDucks';

interface Props {
  children: React.ReactNode;
}

const combinedState = combineReducers({
  counterReducer,
});

const rootStore = createStore(combinedState);

export const ReduxProvider = ({ children }: Props): JSX.Element => {
  return <Provider store={rootStore}>{children}</Provider>;
};

export type RootState = ReturnType<typeof combinedState>;
