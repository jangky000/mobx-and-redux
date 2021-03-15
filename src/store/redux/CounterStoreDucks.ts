import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// Action Types
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creators
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// Reducer
interface State {
  number: number;
}
const initialState: State = {
  number: 0,
};

const counterReducer = handleActions(
  {
    [INCREASE]: (baseState: State) =>
      produce(baseState, (draftState: State) => {
        // eslint-disable-next-line no-param-reassign
        draftState.number += 1;
      }),
    [DECREASE]: (baseState: State) =>
      produce(baseState, (draftState: State) => {
        // eslint-disable-next-line no-param-reassign
        draftState.number -= 1;
      }),
  },
  initialState,
);

export default counterReducer;
