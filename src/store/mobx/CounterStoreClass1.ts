import { action, makeObservable, observable } from 'mobx';

class CounterStoreClass1 {
  // observable state
  number = 0;

  constructor() {
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => {
    this.number += 1;
  };

  decrease = () => {
    this.number -= 1;
  };
}

export const counterStore = new CounterStoreClass1();
