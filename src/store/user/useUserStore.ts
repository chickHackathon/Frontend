import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface UserInfo {
  idx: number;
  loginId: string;
  role: string;
  userName: string;
}

export const useUserStore = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const extractUserInfoFromToken = (token: string): UserInfo | null => {
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp < currentTime) {
        throw new Error('Token has expired');
      }

      return {
        idx: decodedToken.idx,
        loginId: decodedToken.loginId,
        role: decodedToken.role,
        userName: decodedToken.userName,
      };
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  };

  const saveUserInfoToSession = (userInfo: UserInfo) => {
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const getUserInfoFromSession = (): UserInfo | null => {
    const userInfoString = sessionStorage.getItem('userInfo');
    if (!userInfoString) return null;

    try {
      return JSON.parse(userInfoString) as UserInfo;
    } catch (error) {
      console.error('Failed to parse userInfo:', error);
      return null;
    }
  };

  const setTokenAndUser = (newToken: string | null) => {
    if (newToken) {
      const userInfo = extractUserInfoFromToken(newToken);
      if (userInfo) {
        setToken(newToken);
        setUser(userInfo);
        setIsLoggedIn(true);
        saveUserInfoToSession(userInfo);
      } else {
        logout();
      }
    } else {
      logout();
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
    sessionStorage.removeItem('userInfo');
  };

  const initializeUser = () => {
    const userInfo = getUserInfoFromSession();
    if (userInfo) {
      setUser(userInfo);
      setIsLoggedIn(true);
    }
  };

  // 초기화 실행
  initializeUser();

  return {
    token,
    user,
    isLoggedIn,
    setToken: setTokenAndUser,
    logout,
  };
};
