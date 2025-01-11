import styled from 'styled-components';
import TopBar from '../../shared/ui/TopBar';
import Icon from '../../shared/ui/Icon';
import Cards from '../../components/MyStudy/Cards';

const MyPage = () => {
  const handleCategoryClick = () => {
    console.log('카테고리 버튼 클릭됨');
  };

  return (
    <>
      <TopBar pageName="my-page">마이 페이지</TopBar>
      <SearchBar>
        <input type="text" placeholder="스터디 검색하기" />
        <CategoryButtonDiv onClick={handleCategoryClick}>
          <IconDiv>
            <Icon path="category" width="24px" height="24px" />
          </IconDiv>
        </CategoryButtonDiv>
      </SearchBar>
      <Cards />
    </>
  );
};

export default MyPage;

const SearchBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 9px;
  gap: 12px;
  input {
    width: 281px;
    padding: 12px 10px;
    border-radius: 30px;
    border: 1px solid var(--gray-scale-gray-100, #f5f5fa);
    background: #fff;

    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
  }
`;

const CategoryButtonDiv = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #f5f5fa;
  background-color: #fff;
  fill: var(--gray-scale-white, #fff);
  stroke-width: 1px;
  stroke: var(--gray-scale-gray-100, #f5f5fa);
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.03));
`;

const IconDiv = styled.div`
  position: absolute;
`;
