import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import StudyDetail from "../pages/studyDetail/StudyDetail";
import StudyRecord from "../pages/studyRecord/StudyRecord";
import TempPage from "../pages/TempPage";


const AppRoutes: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<TempPage />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
        <Route path="/study-detail" element={<StudyDetail />} />
        <Route path="/study-record" element={<StudyRecord />} />
    </Routes>
  );
};

export default AppRoutes;
