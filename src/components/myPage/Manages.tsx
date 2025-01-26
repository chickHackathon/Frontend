import { useState, useEffect, useRef } from 'react';
import Manage from './Manage';
import { manageMockDataList } from './mockData';
import styled from 'styled-components';

const Manages = () => {
  const [visibleManageData, setVisibleManageData] = useState(
    manageMockDataList.slice(0, 12)
  );
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const loadMoreData = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      const nextManageData = manageMockDataList.slice(
        visibleManageData.length,
        visibleManageData.length + 6
      );
      setVisibleManageData((prev) => [...prev, ...nextManageData]);
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
  }, [visibleManageData, isLoading]);

  return (
    <ManagesContainer ref={containerRef}>
      {visibleManageData.map((data, index) => (
        <Manage key={index} title={data.title} name={data.name} />
      ))}
      <div id="sentinel" style={{ height: '10px' }} />
    </ManagesContainer>
  );
};

export default Manages;

const ManagesContainer = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  gap: 12px;
  overflow-y: scroll;
  height: 100vh;
  padding-bottom: 50px;
  margin: 0;
`;
