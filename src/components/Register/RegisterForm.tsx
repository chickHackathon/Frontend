import React, { useState } from 'react';
import Input from '../../shared/ui/Input';
import Button from '../../shared/ui/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nicknameValue, setNicknameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [latitudeValue, setLatitudeValue] = useState<number | null>(null);
  const [longitudeValue, setLongitudeValue] = useState<number | null>(null);
  const [region1DepthNameValue, setRegion1DepthNameValue] = useState('');
  const [region2DepthNameValue, setRegion2DepthNameValue] = useState('');
  const [region3DepthNameValue, setRegion3DepthNameValue] = useState('');

  const handleAddressSearch = () => {
    new daum.Postcode({
      oncomplete: function (data: DaumAddressData) {
        const { address } = data;

        setLocationValue(address);

        fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_MAP_REST_API_KEY}`,
          },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.documents.length > 0) {
              const locationData = result.documents[0];
              setLatitudeValue(parseFloat(locationData.y));
              setLongitudeValue(parseFloat(locationData.x));
              setRegion1DepthNameValue(locationData.region_1depth_name);
              setRegion2DepthNameValue(locationData.region_2depth_name);
              setRegion3DepthNameValue(locationData.region_3depth_name);
            }
          })
          .catch((error) => console.error('Error fetching location data:', error));
      },
    }).open();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      id: idValue,
      password: passwordValue,
      nickname: nicknameValue,
      email: emailValue,
      location: locationValue,
      latitude: latitudeValue,
      longitude: longitudeValue,
      region_1depth_name: region1DepthNameValue,
      region_2depth_name: region2DepthNameValue,
      region_3depth_name: region3DepthNameValue,
    };

    try {
      const response = await axiosInstance.post('/member/signup', formData);
      console.log('회원가입 성공:', response.data);
      navigate('/login');
    } catch (error: any) {
      console.error('회원가입 실패:', error.response?.data || error.message);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const isButtonDisabled =
    !idValue ||
    !passwordValue ||
    !nicknameValue ||
    !emailValue ||
    !locationValue

  return (
    <RegisterFormDiv>
      <FormElement onSubmit={handleSubmit}>
        <FormDiv>
          <Input
            title="아이디"
            placeholder="아이디"
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
          />
          <Input
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Input
            title="닉네임"
            placeholder="삐약이"
            value={nicknameValue}
            onChange={(e) => setNicknameValue(e.target.value)}
          />
          <Input
            title="이메일"
            placeholder="0000@000.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <div>
            <Input
              title="주소 정보"
              placeholder="주소를 검색해주세요"
              value={locationValue}
              readOnly/>
            <SearchButton type="button" onClick={handleAddressSearch}>
              주소 찾기
            </SearchButton>
          </div>
        </FormDiv>
        <MarginDiv></MarginDiv>
        <Button type="submit" disabled={isButtonDisabled}>
          시작하기
        </Button>
      </FormElement>
    </RegisterFormDiv>
  );
};

export default RegisterForm;

const RegisterFormDiv = styled.div`
    width: 335px;
    margin: 0;
    padding: 0;
`;

const MarginDiv = styled.div`
    height: 68px;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const FormElement = styled.form`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`;

const SearchButton = styled.button`
    background: #06f;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    margin-top: 8px;
    cursor: pointer;
    &:hover {
        background: #005bb5;
    }
`;