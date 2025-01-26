import styled from 'styled-components';

export const BookerFrame = styled.div`
  display: flex;
  padding: 60px 0px;
  flex-direction: column;
  align-items: flex-start;
  //gap: 25px;
  width: 90%;
`;

export const BookerSubTitle = styled.p`
  color: #06f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18px */
`;

export const BookerTitle = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
`;

export const BookerList = styled.div`
  display: flex;
  width: 91px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const BookerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const BookerName = styled.p`
  color: #323237;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.7px;
`;

export const CafeList = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style: none;
  width: 100%;
`;

export const CafeListItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  gap: 5px;
`;

export const CafeName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const CafeAddress = styled.div`
  font-size: 14px;
  color: #666;
`;

export const CafePhone = styled.div`
  font-size: 14px;
  color: #999;
`;
