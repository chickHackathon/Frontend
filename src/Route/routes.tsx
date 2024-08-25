import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Camera from '../pages/Camera';
import LoginPage from '../pages/LoginPage';
import MapPage from '../pages/MapPage';
import MemoPage from "../pages/MemoPage";

const AppRoutes: React.FC = () => {
    const handleLogin = () => {
        console.log('LoginPage set');
    };

    return (
        <Routes>
            <Route path="/camera" element={<Camera />} />
            <Route path="/" element={<LoginPage onComplete={handleLogin} />} />
            <Route path="/gpstest" element={<MapPage />} />
            <Route path="/memo" element={<MemoPage />} />
        </Routes>
    );
};

export default AppRoutes;