import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './core.actions';

export const initialState = 0;

// tslint:disable-next-line: variable-name
const _coreReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

// tslint:disable-next-line: typedef
export function CoreReducer(state, action) {
  return _coreReducer(state, action);
}
