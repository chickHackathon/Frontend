import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Camera from '../pages/Camera';
import LoginPage from '../pages/LoginPage';
import MapPage from '../pages/MapPage';
import MemoPage from '../pages/MemoPage';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const AppRoutes: React.FC = () => {
  const handleLogin = () => {
    console.log('LoginPage set');
  };

  return (
    <Routes>
      <Route path="/camera" element={<Camera />} />
      <Route path="/" element={<LoginPage onComplete={handleLogin} />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
