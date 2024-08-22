import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Camera from './pages/Camera';
import Onboarding from './pages/Onboarding';
import Tabs from './layout/Tabs';
import GpsTest from "./pages/GpsTest";

const App: React.FC = () => {
    const handleOnboardingComplete = () => {
        console.log('Onboarding set');
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/camera" element={<Camera />} />
                    <Route path="/onboarding" element={<Onboarding onComplete={handleOnboardingComplete} />} />
                    <Route path="/gpstest" element={<GpsTest />} />
                </Routes>
                <Tabs />
            </div>
        </Router>
    );
};

export default App;