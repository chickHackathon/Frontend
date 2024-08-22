import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Camera from '../pages/Camera';
import LoginPage from '../pages/LoginPage';
import GpsTest from '../pages/GpsTest';
import MemoPage from "../pages/MemoPage";

const AppRoutes: React.FC = () => {
    const handleLogin = () => {
        console.log('LoginPage set');
    };

    return (
        <Routes>
            <Route path="/camera" element={<Camera />} />
            <Route path="/login" element={<LoginPage onComplete={handleLogin} />} />
            <Route path="/gpstest" element={<GpsTest />} />
            <Route path="/memo" element={<MemoPage />} />
        </Routes>
    );
};

export default AppRoutes;