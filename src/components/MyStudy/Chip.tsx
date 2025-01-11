import styled from 'styled-components';

interface ChipContainerProps {
  type: 'category' | 'ongoing' | 'end';
}

interface ChipProps extends ChipContainerProps {
  children: React.ReactNode;
}

const Chip = ({ children, type }: ChipProps) => {
  return <ChipContainer type={type}>{children}</ChipContainer>;
};

export default Chip;

const ChipContainer = styled.div<ChipContainerProps>`
  display: flex;
  padding: 1px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ type }) =>
    type === 'category'
      ? '#f5f5fa'
      : type === 'ongoing'
        ? '#E5F0FF'
        : '#FFECEC'};
  color: ${({ type }) =>
    type === 'category'
      ? '#69696E'
      : type === 'ongoing'
        ? '#66A3FF'
        : '#FF6E6E'};
  font-family: 'Pretendard-Regular';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 16.5px */
  letter-spacing: -0.22px;
`;
