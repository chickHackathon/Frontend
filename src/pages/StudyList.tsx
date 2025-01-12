import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { calculateDDay, formatStudyTime } from '../utils/avatarUtils';
import { FetchStudies } from '../api/studyListApi';
import dummyStudies, { StudyItemProps } from '../data/dummyStudies';
import { Link } from 'react-router-dom';

const StudyItem: React.FC<StudyItemProps> = ({
  title,
  category,
  img,
  deadLine,
  studyTime,
  location,
}) => (
  <StudyItemBlock>
    <Img src={img || 'https://via.placeholder.com/80'} alt="사진" />
    <Description>
      <div>
        <Category>{category}</Category>
        <End>{calculateDDay(deadLine)}</End>
      </div>
      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{title}</div>
      <div style={{ fontSize: '12px', color: '#999' }}>
        {location || '위치 미정'} · {formatStudyTime(studyTime)}
      </div>
    </Description>
  </StudyItemBlock>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [studies, setStudies] = useState<StudyItemProps[]>([]);

  const tabs = ['text1', 'text2', 'text3', 'text4', 'text5'];

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const params = {
          sort: 'default',
          page: 0,
          category: tabs[activeTab],
        };
        const data = await FetchStudies(params);
        setStudies(data.result || []);
      } catch (error) {
        console.error('Error fetching studies:', error);
        setStudies(dummyStudies);
      }
    };

    fetchStudies();
  }, []);

  const filteredStudies = studies.filter((study) => {
    const matchesCategory = study.category === tabs[activeTab];
    const matchesSearch =
      searchTerm === '' ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchTerm(event.currentTarget.value);
    }
  };

  return (
    <PageContainer>
      <Header>
        <span>카테고리</span>
        <Link to="/my-page">
          <ProfileButton>MY</ProfileButton>
        </Link>
      </Header>
      <SearchBar>
        <input
          type="text"
          placeholder="어떤 스터디를 찾으세요?"
          onKeyPress={handleKeyPress}
        />
      </SearchBar>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>
      <StudyListContainer>
        {filteredStudies.map((study, index) => (
          <StudyItem key={index} {...study} />
        ))}
      </StudyListContainer>
      <Link to="/studycreate">
        <FloatingButton>+</FloatingButton>
      </Link>
    </PageContainer>
  );
};

export default App;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 100vh;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  width: 375px;
  height: 44px;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 9px;

  input {
    width: 281px;
    padding: 12px 10px;
    border-radius: 30px;
    border: 1px solid #f5f5fa;
    background: #fff;

    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
`;

const ProfileButton = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  color: #000;
  position: absolute;
  right: 20px;
  top: 13px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  cursor: pointer;
  padding: 8px;
  position: relative;
  color: ${({ isActive }) => (isActive ? '#323237' : '#AFAFB4')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: #000;
  }
`;

const StudyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;

const StudyItemBlock = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px;
  width: 315px;
  border-radius: 8px;
  border: 1px solid #f5f5fa;
  background: #fff;

  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
`;

const Img = styled.img`
  width: 97px;
  height: 98px;
  border-radius: 8px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Category = styled.div`
  font-size: 11px;
  color: #69696e;
  border-radius: 10px;
  background: #f5f5fa;
  text-align: center;
  padding: 1px 10px;
  display: inline-block;
  margin-right: 10px;
`;

const End = styled.div`
  font-size: 11px;
  border-radius: 10px;
  background: #e5f0ff;
  color: #66a3ff;
  padding: 1px 10px;
  text-align: center;
  display: inline-block;
`;

const FloatingButton = styled.button`
  position: fixed;
  left: 307px;
  bottom: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0066ff;
  color: #fff;
  border: none;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow:
    16px 17px 14px 0px rgba(0, 0, 0, 0.05),
    7px 8px 10px 0px rgba(0, 0, 0, 0.09),
    2px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;
