import styled from 'styled-components';
import Chip from './Chip';
import Icon from '../../shared/ui/Icon';

interface ImageProps {
  image: string;
}

interface endProps {
  category: 'ongoing' | 'end';
}

interface CardProps extends ImageProps, endProps {
  title: string;
  location: string;
  date: string;
  people: number;
}

const Card = ({
  image,
  category,
  title,
  location,
  date,
  people,
}: CardProps) => {
  return (
    <CardDiv>
      <CardDivContainer>
        <ImageContainer image={image}>
          {category == 'end' && <ImageDimContainer></ImageDimContainer>}
        </ImageContainer>
        <ContentContainer>
          <ChipContainer>
            <Chip type="category">카테고리</Chip>
            <Chip type={category}>모집 마감 D-300</Chip>
          </ChipContainer>
          <Contents>
            <ContentP category={category}>{title}</ContentP>
            <DetailDiv>
              <LocationDiv>
                <Icon path="map-pin-filled" width="16px" height="16px" />
                <TimeDiv>
                  <LocationP>{location}</LocationP>·
                  <LocationP>{date}</LocationP>
                </TimeDiv>
              </LocationDiv>
              <PeopleDiv>
                <Icon path="social" width="16px" height="16px" />
                <PeopleP>{people}명 참여중</PeopleP>
              </PeopleDiv>
            </DetailDiv>
          </Contents>
        </ContentContainer>
      </CardDivContainer>
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--gray-scale-gray-100, #f5f5fa);
  background: #fff;

  /* 리스트 드롭쉐도우 */
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
`;

const CardDivContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ImageContainer = styled.div<ImageProps>`
  width: 97px;
  height: 98px;
  border-radius: 8px;
  background: ${({ image }) => `url(${image}) lightgray 50% / cover no-repeat`};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const ContentP = styled.p<endProps>`
  overflow: hidden;
  color: ${({ category }) => (category == 'end' ? '#D7D7DC' : '#323237')};
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;

  /* body2 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.7px;
`;

const DetailDiv = styled.div`
  display: flex;
  width: 148px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`;

const TimeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LocationP = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--text-text-3, #afafb4);
  text-overflow: ellipsis;
  margin: 0;

  /* overline */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;

const PeopleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const PeopleP = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--text-text-3, #afafb4);
  text-overflow: ellipsis;
  margin: 0;

  /* caption2 */
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 16.5px */
  letter-spacing: -0.22px;
`;

const ImageDimContainer = styled.div`
  width: 106px;
  height: 108px;
  opacity: 0.9;
  background: #fff;
`;
