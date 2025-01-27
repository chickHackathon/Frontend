import React, { useState } from 'react';
import Input from '../../shared/ui/Input';
import Button from '../../shared/ui/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nicknameValue, setNicknameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [latitudeValue, setLatitudeValue] = useState<number | null>(null);
  const [longitudeValue, setLongitudeValue] = useState<number | null>(null);

  const handleAddressSearch = () => {
    new daum.Postcode({
      oncomplete: function (data: DaumAddressData) {
        const { address } = data;

        setLocationValue(address);

        fetch(
          `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.documents.length > 0) {
              const locationData = result.documents[0];
              setLatitudeValue(parseFloat(locationData.y));
              setLongitudeValue(parseFloat(locationData.x));
            }
          })
          .catch((error) =>
            console.error('Error fetching location data:', error)
          );
      },
    }).open();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: nameValue,
      password: passwordValue,
      nickname: nicknameValue,
      email: emailValue,
      location: locationValue,
      latitude: latitudeValue,
      longitude: longitudeValue,
    };

    console.log(formData);
    navigate('/');

    try {
      const response = await axiosInstance.post('/user/signup', formData);
      console.log('회원가입 성공:', response.data);
      navigate('/login');
    } catch (error: any) {
      console.error('회원가입 실패:', error.response?.data || error.message);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const isButtonDisabled =
    !nameValue ||
    !passwordValue ||
    !nicknameValue ||
    !emailValue ||
    !locationValue;

  return (
    <RegisterFormDiv>
      <FormElement onSubmit={handleSubmit}>
        <FormDiv>
          <Input
            title="이름"
            placeholder="이름"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <Input
            title="이메일"
            placeholder="0000@000.com"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
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
          <div>
            <Input
              title="주소 정보"
              placeholder="주소를 검색해주세요"
              value={locationValue}
              readOnly
              onClick={handleAddressSearch}
            />
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
  width: 100%;
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
  padding: 20px;
`;
