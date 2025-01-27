import styled from 'styled-components';
import Input from '../../shared/ui/Input';
import React, { useState } from 'react';
import Button from '../../shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';

const LoginForm = () => {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: idValue,
      password: passwordValue,
    };
    console.log(formData);
    navigate('/studylist');
    try {
      const response = await axiosInstance.post('/member/login', formData);
      console.log('로그인 성공:', response.data);
      navigate('/studylist');
    } catch (error: any) {
      console.error('로그인 요청 오류:', error);
      alert('로그인 요청 중 오류가 발생했습니다.');
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIdValue(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value);
  };

  const handleClickRegister = () => {
    navigate('/register');
  };

  return (
    <LoginFormDiv>
      <Form onSubmit={handleSubmit}>
        <FormDiv>
          <Input
            placeholder="아이디"
            value={idValue}
            onChange={handleIdChange}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </FormDiv>
        <Button type="submit">로그인 하기</Button>
      </Form>
      <RegisterP onClick={handleClickRegister}>회원가입</RegisterP>
    </LoginFormDiv>
  );
};

export default LoginForm;

const LoginFormDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const RegisterP = styled.p`
  color: #69696e;
  font-family: 'Pretendard-SemiBold';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  margin: 0;
`;
