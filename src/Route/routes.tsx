import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Camera from '../pages/Camera';
import MemoPage from '../pages/MemoPage';
import Register from '../pages/Register/Register';
import StudyDetail from "../pages/studyDetail/StudyDetail";
import StudyRecord from "../pages/studyRecord/StudyRecord";
import TempPage from "../pages/TempPage";
import StudyList from "../pages/StudyList";
import StudyCreate from "../pages/studyCreate/StudyCreate";
import Login from "../pages/Login/Login";

const AppRoutes: React.FC = () => {

  return (
    <Routes>
      <Route path="/camera" element={<Camera />} />
      <Route path="/" element={<TempPage/>} />
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
        <Route path="/studycreate" element={<StudyCreate />} />
        <Route path="/studylist" element={<StudyList />} />
        <Route path="/study-detail/:id" element={<StudyDetail />} />
        <Route path="/study-record/:id" element={<StudyRecord />} />
    </Routes>
  );
};

export default AppRoutes;
