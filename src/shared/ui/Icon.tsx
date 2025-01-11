import styled from 'styled-components';

interface IconProps {
  path: string;
  width: string;
  height: string;
}

const Icon = ({ path, width, height }: IconProps) => {
  return (
    <IconDiv width={width} height={height}>
      <img src={`assets/${path}.svg`} alt={`${path} icon`} />
    </IconDiv>
  );
};

export default Icon;

const IconDiv = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
