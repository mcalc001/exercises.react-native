import { ThunkAction, ThunkDispatch as RThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'typesafe-actions';

// Our ThunkResult leverages the dynamically inferred types of RootState and RootAction
export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;
export type ThunkDispatch = RThunkDispatch<RootState, undefined, RootAction>;
