import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StudyList from './pages/StudyList';

const App: React.FC = () => {
    return (
        <Router>
            <StudyList/>
        </Router>
    );
};

export default App;