import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import StudyList from '../pages/studyList/StudyList';
import StudyCreate from '../pages/studyCreate/StudyCreate';
import MyPage from '../pages/MyPage/MyPage';
import StudyDetailPage from '../pages/studyDetail/StudyDetailPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/studycreate" element={<StudyCreate />} />
      <Route path="/studylist" element={<StudyList />} />
      <Route path="/studycreate" element={<StudyCreate />} />
      <Route path="/studylist" element={<StudyList />} />
      <Route path="/study-detail" element={<StudyDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
