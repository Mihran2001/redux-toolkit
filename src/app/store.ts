import { count } from 'console';
import { createStore } from 'redux';

export interface IinitialState {
  count: number;
}

interface Iaction {
  type: string;
}

const initialState: IinitialState = {
  count: 0,
};

function reducer(state: IinitialState, action: Iaction): IinitialState {
  if (action.type === 'addCount') {
    return {
      //   ...state,
      count: ++state.count,
    };
  } else if (action.type === 'decreaseInput') {
    return {
      //   ...state,
      count: --state.count,
    };
  }
  return state;
}

export const store = createStore(reducer, initialState);
