import React, { useState } from 'react';
import styled from 'styled-components';

interface StudyItemProps {
  name: string;
  category: string;
  image: string;
  participants: number;
  location: string;
  date: string;
  end: string;
}

const StudyItem: React.FC<StudyItemProps> = ({
  name,
  category,
  image,
  participants,
  location,
  date,
  end,
}) => (
  <StudyItemBlock>
    <Img src={image} alt="사진" />
    <Description>
      <div>
        <Category>{category}</Category>
        <End>{end}</End>
      </div>
      <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</div>
      <div style={{ fontSize: '12px', color: '#999' }}>
        {location} · {date}
      </div>
      <div style={{ fontSize: '11px', color: '#999' }}>
        {participants}명 참여중
      </div>
    </Description>
  </StudyItemBlock>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = ['text1', 'text2', 'text3', 'text4', 'text5'];

  const studies: StudyItemProps[] = [
    {
      name: '영공모 ~영어 공부하는 모임~',
      category: '카테고리',
      image: 'https://via.placeholder.com/80',
      participants: 10,
      location: '지역',
      date: '1.20(월) 오전 11:00',
      end: 'D-300',
    },
    {
      name: '스터디명 스터디명 스터디명',
      category: '카테고리',
      image: 'https://via.placeholder.com/80',
      participants: 5,
      location: '지역',
      date: '1.20(월) 오전 11:00',
      end: 'D-300',
    },
    {
      name: '영공모 ~영어 공부하는 모임~',
      category: '카테고리',
      image: 'https://via.placeholder.com/80',
      participants: 10,
      location: '지역',
      date: '1.20(월) 오전 11:00',
      end: 'D-300',
    },
    {
      name: '스터디명 스터디명 스터디명',
      category: '카테고리',
      image: 'https://via.placeholder.com/80',
      participants: 5,
      location: '지역',
      date: '1.20(월) 오전 11:00',
      end: 'D-300',
    },
    {
      name: '영공모 ~영어 공부하는 모임~',
      category: '카테고리',
      image: 'https://via.placeholder.com/80',
      participants: 10,
      location: '지역',
      date: '1.20(월) 오전 11:00',
      end: 'D-300',
    },
  ];

  return (
    <PageContainer>
      <Header>
        <span>카테고리</span>
      </Header>
      <SearchBar>
        <input type="text" placeholder="어떤 스터디를 찾으세요?" />
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
        {studies.map((study, index) => (
          <StudyItem key={index} {...study} />
        ))}
      </StudyListContainer>
      <FloatingButton>+</FloatingButton>
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
    border: 1px solid var(--gray-scale-gray-100, #f5f5fa);
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
  border: 1px solid var(--gray-scale-gray-100, #f5f5fa);
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
  color: var(--text-text-2, #69696e);
  border-radius: 10px;
  background: var(--gray-scale-gray-100, #f5f5fa);
  text-align: center;
  padding: 1px 10px;
  display: inline-block;
  margin-right: 10px;
`;

const End = styled.div`
  font-size: 11px;
  border-radius: 10px;
  background: var(--blue-100, #e5f0ff);
  color: var(--blue-400, #66a3ff);
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
