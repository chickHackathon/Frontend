import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  title,
  placeholder,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <InputDiv>
      <InputTitle>{title}</InputTitle>
      <InputLine
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputDiv>
  );
};

export default Input;

const InputDiv = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const InputLine = styled.input`
  display: flex;
  padding: 14px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--gray-scale-gray-200, #e6e6eb);
  background: var(--gray-scale-white, #fff);
`;

const InputTitle = styled.p`
  align-self: stretch;
  color: var(--text-text-2, #69696e);

  /* caption1 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18px */
`;
