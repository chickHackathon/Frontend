import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Camera from '../pages/Camera';
import LoginPage from '../pages/LoginPage';
import MemoPage from '../pages/MemoPage';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import StudyDetail from '../pages/studyDetail/StudyDetail';
import StudyRecord from '../pages/studyRecord/StudyRecord';
import StudyList from '../pages/StudyList';
import StudyCreate from '../pages/studyCreate/StudyCreate';

const AppRoutes: React.FC = () => {
  const handleLogin = () => {
    console.log('LoginPage set');
  };

  return (
    <Routes>
      <Route path="/camera" element={<Camera />} />
      <Route path="/" element={<LoginPage onComplete={handleLogin} />} />
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studylist" element={<StudyList />} />
      <Route path="/study-detail/:id" element={<StudyDetail />} />
      <Route path="/study-record/:id" element={<StudyRecord />} />
      <Route path="/studycreate" element={<StudyCreate />} />
    </Routes>
  );
};

export default AppRoutes;
