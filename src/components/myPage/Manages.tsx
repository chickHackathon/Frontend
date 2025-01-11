import { useState, useEffect, useRef } from 'react';
import Manage from './Manage';
import { manageMockDataList } from './mockData';

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
    <div
      ref={containerRef}
      style={{ overflowY: 'scroll', height: '100vh', paddingBottom: '50px' }}
    >
      {visibleManageData.map((data, index) => (
        <Manage key={index} title={data.title} name={data.name} />
      ))}
      <div id="sentinel" style={{ height: '10px' }} />
    </div>
  );
};

export default Manages;
