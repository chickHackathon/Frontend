import { useState, useEffect, useRef } from 'react';
import Acceptance from './Acceptance';
import { acceptanceMockDataList } from './mockData';
import styled from 'styled-components';

const Acceptances = () => {
  const [visibleAcceptanceData, setVisibleAcceptanceData] = useState(
    acceptanceMockDataList.slice(0, 12)
  );
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const loadMoreData = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      const nextAcceptanceData = acceptanceMockDataList.slice(
        visibleAcceptanceData.length,
        visibleAcceptanceData.length + 6
      );
      setVisibleAcceptanceData((prev) => [...prev, ...nextAcceptanceData]);
      setIsLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
        loadMoreData();
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [visibleAcceptanceData, isLoading]);

  return (
    <AcceptanceDiv ref={containerRef}>
      {visibleAcceptanceData.map((data, index) => (
        <Acceptance
          key={index}
          image={data.image}
          title={data.title}
          location={data.location}
          date={data.date}
          userIsAccepted={data.userIsAccepted}
        />
      ))}
      <div id="sentinel" style={{ height: '10px' }} />
    </AcceptanceDiv>
  );
};

export default Acceptances;

const AcceptanceDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  padding: 0 10px 50px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
