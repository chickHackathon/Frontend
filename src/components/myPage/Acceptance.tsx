import styled from 'styled-components';
import Icon from '../../shared/ui/Icon';
import Chip from './Chip';

interface ImageProps {
  image: string;
}

interface AcceptanceProps extends ImageProps {
  title: string;
  location: string;
  date: string;
  userIsAccepted: null | true | false;
}

const Acceptance = ({
  image,
  title,
  location,
  date,
  userIsAccepted,
}: AcceptanceProps) => {
  return (
    <>
      <StudyContainer>
        <StudyDiv>
          <ImageContainer image={image}></ImageContainer>
          <ContentContainer>
            <TitleP>{title}</TitleP>
            <LocationDiv>
              <Icon path="map-pin-filled" width="16px" height="16px" />
              <TimeDiv>
                <LocationP>{location}</LocationP>
                <Icon path="Ellipse 18" width="2px" height="2px" />
                <LocationP>{date}</LocationP>
              </TimeDiv>
            </LocationDiv>
            {userIsAccepted === null ? (
              <Chip type="category">스터디 참가 신청중</Chip>
            ) : userIsAccepted === true ? (
              <Chip type="ongoing">참가 승인 완료</Chip>
            ) : (
              <Chip type="end">다음에 함께해요!</Chip>
            )}
          </ContentContainer>
        </StudyDiv>
      </StudyContainer>
    </>
  );
};

export default Acceptance;

const StudyContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #f5f5fa;
  background: #fff;

  /* 리스트 드롭쉐도우 */
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
`;

const StudyDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ImageContainer = styled.div<ImageProps>`
  width: 73px;
  height: 73px;
  border-radius: 8px;
  background: ${({ image }) => `url(${image}) lightgray 50% / cover no-repeat`};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const TitleP = styled.p`
  width: 206px;
  height: 22px;
  overflow: hidden;
  color: #323237;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;

  /* body2 */
  font-family: 'Pretendard-Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.7px;
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 16px;
  padding: 0;
  align-self: stretch;
`;

const TimeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  gap: 4px;
`;

const LocationP = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #afafb4;
  text-overflow: ellipsis;
  margin: 0;

  /* overline */
  font-family: 'Pretendard-Medium';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;
