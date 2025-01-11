import styled from 'styled-components';

const MainTitle = () => {
  return (
    <MainDiv>
      <MainP>삐약이즈와 함께 </MainP>
      <PContainer>
        <MainSpan>인생 스터디 </MainSpan>
        <MainP> 찾아요!</MainP>
      </PContainer>
    </MainDiv>
  );
};

export default MainTitle;

const MainDiv = styled.div`
  margin-top: 100px;
  width: 217px;
  height: 72px;
  margin-bottom: 327px;
`;

const MainP = styled.p`
  color: var(--text-text-1, #323237);
  font-family: 'Pretendard-Bold';
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */
  letter-spacing: 0.14px;
  margin: 0;
`;

const MainSpan = styled.span`
  color: var(--blue-600, #06f);
  font-family: 'Pretendard-Bold';
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.14px;
  margin: 0 6px 0 0;
`;

const PContainer = styled.div`
  display: flex;
`;
