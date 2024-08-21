import React from 'react';

interface OnboardingProps {
    onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    return (
        <div className="onboarding">
            <h1>PWA TESTING</h1>
    <p>click below to start</p>
    <button onClick={onComplete}>Get Started</button>
    </div>
);
};

export default Onboarding;