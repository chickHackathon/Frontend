import styled from 'styled-components';
import Icon from './Icon';

interface TopBarProps {
  children: React.ReactNode;
}

const TopBar = ({ children }: TopBarProps) => {
  return (
    <TopBarDiv>
      <Icon width="20px" height="20px" path="chevron_left" />
      <TopBarP>{children}</TopBarP>
    </TopBarDiv>
  );
};

export default TopBar;

const TopBarDiv = styled.div`
  display: flex;
  width: 375px;
  height: 44px;
  padding: 10px 173px 10px 15px;
  align-items: center;
  gap: 140px;
`;

const TopBarP = styled.p`
  color: #000;
  text-align: center;

  /* body1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
`;
