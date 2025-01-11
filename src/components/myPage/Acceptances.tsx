import { useState, useEffect, useRef } from 'react';
import Acceptance from './Acceptance';
import { acceptanceMockDataList } from './mockData';

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
    <div
      ref={containerRef}
      style={{ overflowY: 'scroll', height: '100vh', paddingBottom: '50px' }}
    >
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
    </div>
  );
};

export default Acceptances;
