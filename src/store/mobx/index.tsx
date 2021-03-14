import React, { createContext } from 'react';
import { counterStore, CounterStoreClass1 } from './CounterStoreClass1';

interface Props {
  children: React.ReactNode;
}
interface Store {
  counterStore: CounterStoreClass1;
}

export const MobXContext = createContext<Store>({ counterStore });

export const MobXProvider = ({ children }: Props): JSX.Element => {
  const store = { counterStore };
  return <MobXContext.Provider value={store}>{children}</MobXContext.Provider>;
};
