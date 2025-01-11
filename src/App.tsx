import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Route/routes';
import SplashScreen from './components/SplashScreen';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logoutUser } from './store/actions';
import { RootState } from './store/store';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: RootState) => state);

  useEffect(() => {
    // JWT 토큰을 로컬 스토리지나 쿠키에서 가져오는 예시
    const token = localStorage.getItem('jwtToken');
    if (token) {
      dispatch(setUser(token)); // JWT 토큰 디코딩 후 상태에 저장
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser()); // 로그아웃
    localStorage.removeItem('jwtToken'); // 로컬 스토리지에서 토큰 삭제
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <div>
            <p>Welcome, {user?.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>Please log in</p>
        )}
      </div>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <AppRoutes />
        </div>
      )}
    </Router>
  );
};

export default App;
