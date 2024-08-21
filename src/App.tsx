import React, { useState } from 'react';
import Onboarding from './component/Onboarding';
import Camera from './component/Camera';

function App() {
    const [showOnboarding, setShowOnboarding] = useState(true);

    const handleOnboardingComplete = () => {
        setShowOnboarding(false);
    };

    return (
        <div className="App">
            {showOnboarding ? (
                <Onboarding onComplete={handleOnboardingComplete} />
            ) : (
                <Camera />
            )}
        </div>
    );
}

export default App;