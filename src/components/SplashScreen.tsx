import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const SplashContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
    img {
        animation: App-logo-spin infinite 20s linear;
    }
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const SplashText = styled.h1`
    font-size: 2rem;
    color: #61dafb;
`;

const SplashScreen: React.FC = () => {
    return (
        <SplashContainer>
            <SplashText>Splash Screen Test</SplashText>
            <img src={logo} alt={'react logo test10'}/>
        </SplashContainer>
    );
};

export default SplashScreen;