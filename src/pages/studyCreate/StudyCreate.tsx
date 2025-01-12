import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PostStudies } from '../../api/studyCreateApi';
import { Link } from 'react-router-dom';

Quill.register('modules/imageUploader', ImageUploader);

const App: React.FC = () => {
  const [memoContent, setMemoContent] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const quillRef = useRef<HTMLDivElement | null>(null);
  const quillInstanceRef = useRef<Quill | null>(null);

  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState<string>('선택해주세요.');
  const [selectedCategory, setSelectedCategory] =
    useState<string>('선택해주세요.');

  const [selectedDeadline, setSelectedDeadline] = useState<Date | null>(
    new Date()
  );
  const [selectedStudyDate, setSelectedStudyDate] = useState<Date | null>(
    new Date()
  );

  const [title, setTitle] = useState<string>('');
  const [memberId] = useState<number>(2);

  const toggleDropdown = (type: string) => {
    if (type === 'region') {
      setIsRegionOpen(!isRegionOpen);
      setIsCategoryOpen(false);
    } else if (type === 'category') {
      setIsCategoryOpen(!isCategoryOpen);
      setIsRegionOpen(false);
    }
  };

  const handleOptionClick = (type: string, option: string) => {
    if (type === 'region') {
      setSelectedRegion(option);
      setIsRegionOpen(false);
    } else if (type === 'category') {
      setSelectedCategory(option);
      setIsCategoryOpen(false);
    }
  };

  useEffect(() => {
    if (quillRef.current && !quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['image'],
          ],
          imageUploader: {
            upload: (file: File) => {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                  resolve(reader.result as string);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
              });
            },
          },
        },
      });

      quillInstanceRef.current.on('text-change', () => {
        setMemoContent(quillInstanceRef.current?.root.innerHTML || '');
      });
    }
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      setImagePreview(URL.createObjectURL(file)); // Display preview
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setImagePreview('');
  };

  const handleComplete = async () => {
    const studyData = {
      title,
      content: memoContent,
      memberId,
      category: selectedCategory,
      deadline: selectedDeadline?.toISOString() || '',
      studyTime: selectedStudyDate?.toISOString() || '',
      finish: false,
      region: selectedRegion,
      img: uploadedImage ? await getBase64(uploadedImage) : '',
    };

    console.log('Sending Study Data:', studyData);

    try {
      const response = await PostStudies(studyData);
      console.log('Post Response:', response);
    } catch (error) {
      console.error('Error posting study:', error);
    }
  };

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // const handleSaveMemo = () => {
  //   console.log('버튼 클릭');
  //   console.log('Memo saved:', memoContent);
  // };

  return (
    <PageContainer>
      <Header>
        <Link to="/studylist">
          <BackButton>&lt;</BackButton>
        </Link>
        <HeaderTitle>스터디 모집</HeaderTitle>
        <CompleteButton onClick={handleComplete}>완료</CompleteButton>
      </Header>
      <ContentContainer>
        <Imgdiv>
          {imagePreview ? (
            <ImgPreview>
              <Img src={imagePreview} alt="미리보기 이미지" />
              <RemoveButton onClick={handleRemoveImage}>삭제</RemoveButton>
            </ImgPreview>
          ) : (
            <ImgUpload>
              <label htmlFor="imageUpload">이미지 업로드</label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </ImgUpload>
          )}
        </Imgdiv>
        <FormSection>
          <FormItem>
            <Label>지역</Label>
            <CustomSelect>
              <SelectedOption onClick={() => toggleDropdown('region')}>
                {selectedRegion}
              </SelectedOption>
              {isRegionOpen && (
                <Options>
                  {['서울', '부산', '대구', '광주'].map((option) => (
                    <Option
                      key={option}
                      onClick={() => handleOptionClick('region', option)}
                    >
                      {option}
                    </Option>
                  ))}
                </Options>
              )}
            </CustomSelect>
          </FormItem>
          <FormItem>
            <Label>모집 마감일</Label>
            <DatePicker
              shouldCloseOnSelect
              selected={selectedDeadline}
              onChange={(date: Date | null) => setSelectedDeadline(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="날짜를 선택해주세요"
            />
          </FormItem>
          <FormItem>
            <Label>스터디 진행일</Label>
            <DatePicker
              shouldCloseOnSelect
              selected={selectedStudyDate}
              onChange={(date: Date | null) => setSelectedStudyDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="날짜를 선택해주세요"
            />
          </FormItem>
          <FormItem>
            <Label>카테고리</Label>
            <CustomSelect>
              <SelectedOption onClick={() => toggleDropdown('category')}>
                {selectedCategory}
              </SelectedOption>
              {isCategoryOpen && (
                <Options>
                  {['프로그래밍', '디자인', '외국어'].map((option) => (
                    <Option
                      key={option}
                      onClick={() => handleOptionClick('category', option)}
                    >
                      {option}
                    </Option>
                  ))}
                </Options>
              )}
            </CustomSelect>
          </FormItem>
          <div>
            <Contenttitle
              type="text"
              placeholder="스터디 제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <EditorContainer ref={quillRef}></EditorContainer>
            {/* <button onClick={handleSaveMemo}>Save Memo</button> */}
            {/* <SavedMemoContainer
            dangerouslySetInnerHTML={{ __html: memoContent }}
            ></SavedMemoContainer> */}
          </div>
        </FormSection>
      </ContentContainer>
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
  height: 44px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  color: #000;
`;

const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CompleteButton = styled.button`
  font-size: 16px;
  color: var(--blue-600, #06f);
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 12px;
  margin: 0 30px;
`;

const Imgdiv = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

const ImgPreview = styled.div`
  display: flex;
  align-items: end;
`;

const ImgUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  width: 98px;
  height: 98px;
  background-color: #f5f5fa;
  border-radius: 8px;
`;

const Img = styled.img`
  width: 98px;
  height: 98px;
  object-fit: cover;
  border-radius: 8px;
`;

const RemoveButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// const Img = styled.img`
//   width: 98px;
//   height: 98px;
//   border-radius: 8px;
//   background: var(--gray-scale-gray-100, #f5f5fa);
// `;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  height: 43px;
  padding: 15px 0px 4px 0px;
  justify-content: space-between;
  align-items: end;
  align-self: stretch;
  border-bottom: 1px solid var(--gray-scale-gray-100, #f5f5fa);
`;

const Label = styled.span`
  font-size: 14px;
  color: var(--text-text-3, #afafb4);
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.7px;
`;

const CustomSelect = styled.div`
  position: relative;
  width: 40%;
  cursor: pointer;
`;

const SelectedOption = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #d7d7dc;
  border: none;
  background-color: #fff;
  text-align: right;
`;

const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid var(--gray-scale-gray-100, #f5f5fa);
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow-y: auto;
`;

const Option = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #afafb4;
  text-align: end;

  &:hover {
    background: #e5f0ff;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  /* width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid var(--gray-scale-gray-100, #f5f5fa);
  border-radius: 4px;
  background: #fff;
  color: #000;

  /* &:focus {
    border-color: var(--blue-600, #06f);
    outline: none;
  } */
`;

const SelectBox2 = styled.input`
  color: var(--text-text-4, #d7d7dc);
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.7px;
`;

const Contenttitle = styled.input`
  margin-top: 35px;
  margin-bottom: 16px;

  &::placeholder {
    color: #d7d7dc;
    font-size: 20px;
    font-weight: 700;
  }
  color: #000;
  font-size: 20px;
  font-weight: 700;
  border: none;
  outline: none;
`;

const EditorContainer = styled.div`
  height: 189px;
  border: none;
  overflow-y: auto;
`;

// const SavedMemoContainer = styled.div`
//   width: 100%;
//   box-sizing: border-box;
// `;
