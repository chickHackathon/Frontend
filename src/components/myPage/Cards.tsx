import styled from 'styled-components';
import Card, { CardProps } from './Card';

const Cards = () => {
  const cardMockData: CardProps[] = [
    {
      image: '/assets/category.svg',
      category: 'ongoing',
      title: '1번',
      location: '서울',
      date: '오늘',
      people: 10,
      dueDate: 10,
    },
    {
      image: '/assets/social.svg',
      category: 'ongoing',
      title: '2번',
      location: '인천',
      date: '내일',
      people: 3030,
      dueDate: 50000,
    },
    {
      image: '/assets/category.svg',
      category: 'end',
      title: '3번',
      location: '부산',
      date: '모레',
      people: 25,
      dueDate: 0,
    },
    {
      image: '/assets/social.svg',
      category: 'end',
      title: '4번',
      location: '대전',
      date: '2025-02-01',
      people: 150,
      dueDate: 0,
    },
    {
      image: '/assets/category.svg',
      category: 'ongoing',
      title: '5번',
      location: '광주',
      date: '2025-01-18',
      people: 500,
      dueDate: 0,
    },
    {
      image: '/assets/social.svg',
      category: 'end',
      title: '6번',
      location: '울산',
      date: '2025-01-22',
      people: 220,
      dueDate: 0,
    },
    {
      image: '/assets/category.svg',
      category: 'ongoing',
      title: '7번',
      location: '대구',
      date: '2025-01-19',
      people: 300,
      dueDate: 0,
    },
    {
      image: '/assets/social.svg',
      category: 'end',
      title: '8번',
      location: '제주',
      date: '2025-02-05',
      people: 50,
      dueDate: 0,
    },
    {
      image: '/assets/category.svg',
      category: 'ongoing',
      title: '9번',
      location: '서울',
      date: '2025-02-12',
      people: 12,
      dueDate: 0,
    },
    {
      image: '/assets/social.svg',
      category: 'end',
      title: '10번',
      location: '인천',
      date: '2025-02-20',
      people: 1000,
      dueDate: 0,
    },
  ];

  return (
    <CardsDiv>
      {cardMockData.map((data, index) => (
        <Card
          key={index}
          image={data.image}
          category={data.category}
          title={data.title}
          location={data.location}
          date={data.date}
          people={data.people}
          dueDate={data.dueDate}
        />
      ))}
    </CardsDiv>
  );
};

export default Cards;

const CardsDiv = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
