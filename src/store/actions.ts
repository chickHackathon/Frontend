// actions.ts
import { jwtDecode } from 'jwt-decode';
import { SET_USER, LOGOUT_USER, ActionTypes } from './actionTypes';

// 토큰을 디코딩하여 사용자 정보를 스토어에 저장
export const setUser = (token: string): ActionTypes => {
  const decoded = jwtDecode(token);
  return {
    type: SET_USER,
    payload: decoded,
  };
};

// 로그아웃 시 사용자 정보 삭제
export const logoutUser = (): ActionTypes => {
  return {
    type: LOGOUT_USER,
  };
};
