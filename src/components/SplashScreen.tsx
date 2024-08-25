import React from 'react';
import styled from 'styled-components';

const SplashContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
`;

const SplashText = styled.h1`
    font-size: 2rem;
    color: #61dafb;
`;

const SplashScreen: React.FC = () => {
    return (
        <SplashContainer>
            <SplashText>Splash Screen Test</SplashText>
            <img src='src/logo.svg' alt={'react logo'}/>
        </SplashContainer>
    );
};

export default SplashScreen;