import styled from 'styled-components';

interface IconProps {
  path: string;
  width: string;
  height: string;
  borderRadius?: string;
  backgroundColor?: string;
}

const Icon = ({ path, width, height, borderRadius, backgroundColor }: IconProps) => {
  return (
    <IconDiv width={width} height={height} borderRadius={borderRadius} backgroundColor={backgroundColor}>
      <img src={`assets/${path}.svg`} alt={`${path} icon`} />
    </IconDiv>
  );
};

export default Icon;

const IconDiv = styled.div<{
  width: string,
  height: string,
  borderRadius?: string | undefined,
  backgroundColor?: string | undefined
}>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: ${({ borderRadius }) => borderRadius || '0'};
        background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
    }
`;
