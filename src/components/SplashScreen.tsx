import React from 'react';
import styled from 'styled-components';
import tempLogo from '../assets/tempLogo.jpeg';

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
  return <SplashContainer></SplashContainer>;
};

export default SplashScreen;
