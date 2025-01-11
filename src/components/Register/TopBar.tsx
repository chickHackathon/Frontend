import styled from 'styled-components';
import Icon from '../../shared/ui/Icon';

interface TopBarProps {
  children: React.ReactNode;
}

const TopBar = ({ children }: TopBarProps) => {
  return (
    <TopBarDiv>
      <IconDiv>
        <Icon width="20px" height="20px" path="chevron_left" />
      </IconDiv>
      <TopBarP>{children}</TopBarP>
    </TopBarDiv>
  );
};

export default TopBar;

const TopBarDiv = styled.div`
  display: flex;
  width: 375px;
  height: 44px;
  align-items: center;
  justify-content: center;
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

const IconDiv = styled.div`
  position: absolute;
  left: 15px;
`;
