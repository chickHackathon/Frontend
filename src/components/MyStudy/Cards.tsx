import styled from 'styled-components';
import Card from './Card';

const Cards = () => {
  return (
    <CardsDiv>
      <Card
        image="/assets/category.svg"
        category="ongoing"
        title="1번"
        location="서울"
        date="오늘"
        people={10}
      />
      <Card
        image="/assets/social.svg"
        category="end"
        title="2번"
        location="인천"
        date="내일"
        people={3030}
      />
    </CardsDiv>
  );
};

export default Cards;

const CardsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

/*
  API 들어오면 map으로 돌려서 출력하기.
*/
