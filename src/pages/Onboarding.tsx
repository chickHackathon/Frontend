import React from 'react';
import { OnboardingContainer, Title, Paragraph, Button } from '../styled/OnboardingStyles';

interface OnboardingProps {
    onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    return (
        <OnboardingContainer>
            <Title>PWA TESTING</Title>
            <Paragraph>click below to start</Paragraph>
            <Button onClick={onComplete}>Sth btn Later</Button>
        </OnboardingContainer>
    );
};

export default Onboarding;