import styled from 'styled-components';
import Input from '../../shared/ui/Input';
import React, { useState } from 'react';
import Button from '../../shared/ui/Button';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      id: idValue,
      password: passwordValue,
    };
    console.log(formData);
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
  width: 335px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  width: 335px;
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
  color: var(--text-text-2, #69696e);
  font-family: Pretendard;
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
