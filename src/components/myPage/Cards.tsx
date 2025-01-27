import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import { cardMockData } from './mockData';

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState(cardMockData.slice(0, 12));
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreCards = useCallback(() => {
    if (isLoading) return; // 이미 로딩 중이면 함수 종료
    setIsLoading(true);

    // 바닥에 닿을 때마다 6개씩 더 로드
    setTimeout(() => {
      const nextCards = cardMockData.slice(
        visibleCards.length,
        visibleCards.length + 6
      );
      setVisibleCards((prevCards) => [...prevCards, ...nextCards]);
      setIsLoading(false);
    }, 1000); // 비동기 처리를 위한 딜레이
  }, [visibleCards, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMoreCards();
        }
      },
      { threshold: 1.0 }
    );

    const sentinel = document.getElementById('sentinel');
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [isLoading, loadMoreCards]);

  return (
    <CardsDiv>
      {visibleCards.map((data, index) => (
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
      <div id="sentinel" style={{ height: '10px' }} />
    </CardsDiv>
  );
};

export default Cards;

const CardsDiv = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
