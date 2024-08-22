import React from 'react';
import { OnboardingContainer, Title, Paragraph, Button } from '../styled/OnboardingStyles';

interface OnboardingProps {
    onComplete: () => void;
}

const LoginPage: React.FC<OnboardingProps> = ({ onComplete }) => {
    return (
        <OnboardingContainer>
            <Title>PWA TESTING Main</Title>
            <Paragraph>login</Paragraph>
            <Button onClick={onComplete}>Login Btn</Button>
            <Button onClick={onComplete}>Signup Btn</Button>
        </OnboardingContainer>
    );
};

export default LoginPage;