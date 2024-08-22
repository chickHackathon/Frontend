import styled from 'styled-components';

export const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  margin: 10px;
`;

export const Video = styled.video`
  width: 100%;
  max-width: 640px;
  height: auto;
`;

export const Canvas = styled.canvas`
  display: none;
`;

export const Image = styled.img`
  margin-top: 10px;
  max-width: 100%;
  height: auto;
`;