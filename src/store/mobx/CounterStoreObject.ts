import { observable } from 'mobx';

export const counterStore = observable({
  number: 0,
  increase() {
    this.number += 1;
  },
  decrease() {
    this.number -= 1;
  },
});
