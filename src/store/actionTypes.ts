// actionTypes.ts
export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export type ActionTypes =
  | { type: typeof SET_USER; payload: any }
  | { type: typeof LOGOUT_USER };
