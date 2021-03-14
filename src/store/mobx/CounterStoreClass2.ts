import { makeAutoObservable } from 'mobx';

class CounterStoreClass2 {
  number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number += 1;
  };

  decrease = () => {
    this.number -= 1;
  };
}

export const counterStore = new CounterStoreClass2();
