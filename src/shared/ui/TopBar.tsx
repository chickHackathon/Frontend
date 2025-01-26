import styled from 'styled-components';
import Icon from '../../shared/ui/Icon';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  children: React.ReactNode;
  pageName: string;
}

const TopBar = ({ children, pageName }: TopBarProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const targetPath = pageName === 'studycreate' ? '/' : '/my-page';
    navigate(targetPath);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <TopBarDiv>
      <IconDiv onClick={handleBack}>
        <Icon width="20px" height="20px" path="chevron_left" />
      </IconDiv>
      <TopBarP>{children}</TopBarP>
      <TopBarButton onClick={handleClick}>
        {pageName !== 'my-page' && pageName !== 'register' ? (
          pageName === 'studycreate' ? (
            <CreateP>완료</CreateP>
          ) : (
            <CreateP>MY</CreateP>
          )
        ) : null}
      </TopBarButton>
    </TopBarDiv>
  );
};

export default TopBar;

const TopBarDiv = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: center;
  gap: 140px;
  position: fixed;
  z-index: 1111;
  background-color: #fff;
  top: 0;
  left: 0;
`;

const TopBarP = styled.p`
  color: #000;
  text-align: center;

  /* body1 */
  font-family: 'Pretendard-Medium';
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

const TopBarButton = styled.div`
  position: absolute;
  right: 17px;
`;

const CreateP = styled.p`
  color: #06f;
  text-align: right;

  /* H2 */
  font-family: 'Pretendard-bold';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: -0.96px;
`;
