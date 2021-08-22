import { ActionType, StateType } from 'typesafe-actions';

// Follows the pattern from "typesafe-actions" - https://codesandbox.io/s/github/piotrwitek/typesafe-actions/tree/master/codesandbox

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('../store/index').default>;

  export type RootState = StateType<
    // https://github.com/piotrwitek/typesafe-actions/issues/134
    ReturnType<typeof import('../store/root-reducer').default>
  >;

  export type RootAction = ActionType<
    typeof import('../store/root-action').default
  >;
}
