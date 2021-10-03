import { observable } from 'mobx';

export const state = observable({
  open: false,
  setOpen: (val: boolean): void => {
    state.open = val;
  },
  date: new Date(),
  setDate: (val: Date) => {
    state.date = val;
  },
});
