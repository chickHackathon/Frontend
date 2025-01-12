import styled from 'styled-components';

const RegisterTitle = () => {
  return (
    <TitleDiv>
      <TitleP>회원가입을 위해 알려주세요!</TitleP>
      <SubP>서비스 제공 및 이용을 위하여 회원가입이 필요합니다.</SubP>
    </TitleDiv>
  );
};

export default RegisterTitle;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  padding: 0 20px;
  margin-top: 72px;
  margin-bottom: 40px;
`;

const TitleP = styled.p`
  color: #323237;

  /* H1 */
  font-family: 'Pretendard-Bold';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: 0.1px;
  margin: 0;
`;

const SubP = styled.p`
  color: #69696e;

  /* body2 */
  font-family: 'Pretendard-Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.7px;
  align-self: stretch;
  margin: 0;
`;
