import styled from 'styled-components';

export const DetailFrame = styled.div`
  display: flex;
  width: 375px;
  height: 767px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  margin-top: 44px;
`;

export const DetailTopArea = styled.div`
  height: 269px;
  flex-shrink: 0;
  align-self: stretch;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const BackgroundImageFrame = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 167px;
  flex-shrink: 0;
  background: lightgray 50% / cover no-repeat;
`;

export const DetailInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  z-index: 111;
  top: 100px;
  position: absolute;
`;

export const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  align-self: stretch;
`;

export const InfoDetail = styled.div`
  display: flex;
  width: 295px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const CategoryLabel = styled.div`
  display: flex;
  padding: 1px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #f5f5fa;
  color: #69696e;
  font-family: Pretendard-Regular;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.22px;
`;

export const TitleArea = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #f5f5fa;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background:
    lightgray 50% / cover no-repeat,
    #d9d9d9;
`;

export const UserName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 16.5px */
  letter-spacing: -0.22px;
`;

export const TitleWrap = styled.div`
  align-self: stretch;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.96px;
`;

export const DetailInfo = styled.div`
  display: flex;
  height: 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`;

export const DetailText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  color: #afafb4;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;

export const Dday = styled.div`
  display: flex;
  padding: 1px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #e5f0ff;
  color: #66a3ff;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.22px;
`;

export const MiddleLine = styled.div`
  width: 21px;
  height: 1px;
  background: #d7d7dc;
  margin-top: 30px;
`;

export const DetailContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 70px;
  width: 90%;
  overflow-wrap: break-word;
`;

export const ButtonWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 20px;
  z-index: 1111;
  display: flex;
  justify-content: center;
`;
