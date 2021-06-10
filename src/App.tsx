import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IinitialState } from './app/store';

export default function App() {
  const count = useSelector((state: IinitialState) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: 'addInput' })}>
        {' '}
        Increment{' '}
      </button>
      <h1> {count} </h1>
      <button onClick={() => dispatch({ type: 'decreaseInput' })}>
        {' '}
        Decrement{' '}
      </button>
    </div>
  );
}
