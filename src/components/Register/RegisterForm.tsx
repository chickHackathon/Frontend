import React, { useState } from 'react';
import Input from '../../shared/ui/Input';
import Button from '../../shared/ui/Button';
import styled from 'styled-components';

const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      id: idValue,
      password: passwordValue,
      nickname: nicknameValue,
      phone: phoneValue,
      email: emailValue,
      location: locationValue,
    };
    console.log(formData);
  };

  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nicknameValue, setNicknameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIdValue(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value);
  };
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNicknameValue(value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneValue(value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocationValue(value);
  };

  const isButtonDisabled =
    !idValue ||
    !passwordValue ||
    !nicknameValue ||
    !phoneValue ||
    !emailValue ||
    !locationValue;

  return (
    <RegisterFormDiv>
      <form onSubmit={handleSubmit}>
        <FormDiv>
          <Input
            title="아이디"
            placeholder="아이디"
            value={idValue}
            onChange={handleIdChange}
          />
          <Input
            title="비밀번호"
            placeholder="비밀번호"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
          <Input
            title="닉네임"
            placeholder="삐약이"
            value={nicknameValue}
            onChange={handleNicknameChange}
          />
          <Input
            title="전화번호"
            placeholder="010-0000-0000"
            value={phoneValue}
            onChange={handlePhoneChange}
          />
          <Input
            title="이메일"
            placeholder="0000@000.com"
            value={emailValue}
            onChange={handleEmailChange}
          />
          <Input
            title="주소 정보"
            placeholder="스터디 공간 정보 추천을 위해 입력해주세요!"
            value={locationValue}
            onChange={handleLocationChange}
          />
        </FormDiv>

        <MarginDiv></MarginDiv>
        <Button disabled={isButtonDisabled}>시작하기</Button>
      </form>
    </RegisterFormDiv>
  );
};

export default RegisterForm;

const RegisterFormDiv = styled.div`
  width: 335px;
`;

const MarginDiv = styled.div`
  height: 33px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
