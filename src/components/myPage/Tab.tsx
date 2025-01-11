import { useState } from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import Manages from './Manages';

const Tab = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    'study-participation'
  );

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <TabContainer>
      <OptionContainer>
        <Option
          isSelected={selectedOption === 'study-participation'}
          onClick={() => handleOptionClick('study-participation')}
        >
          참여중인 스터디
        </Option>
        <Option
          isSelected={selectedOption === 'study-management'}
          onClick={() => handleOptionClick('study-management')}
        >
          스터디 관리
        </Option>
      </OptionContainer>

      {/* 조건부 렌더링 */}
      {selectedOption === 'study-participation' && <Cards />}
      {selectedOption === 'study-management' && <Manages />}
    </TabContainer>
  );
};

export default Tab;

// 스타일링
const TabContainer = styled.div`
  display: flex;
  margin-top: 55px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 28px;
`;

const OptionContainer = styled.div`
  display: flex;
  height: 37px;
  align-items: center;
  gap: 12px;
`;

const Option = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  border-bottom: 2px solid
    ${({ isSelected }) => (isSelected ? '#323237' : 'none')};
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? '#323237' : '#AFAFB4')};
  text-align: center;

  /* body2 */
  font-family: 'Pretendard-Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.7px;
`;
