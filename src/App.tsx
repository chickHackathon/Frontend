import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from './layout/Tabs';
import AppRoutes from './Route/routes';
import SplashScreen from './components/SplashScreen';
import StudyList from './pages/StudyList';

const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            {showSplash ? (
                <SplashScreen />
            ) : (
                <div>
                    <AppRoutes />
                    <Tabs />
                </div>
            )}
            <StudyList/>
        </Router>
    );
};

export default App;