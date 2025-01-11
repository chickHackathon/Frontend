import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <Buttons>{children}</Buttons>
    </>
  );
};

export default Button;

const Buttons = styled.button`
  display: flex;
  width: 335px;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  outline: none;
  background: var(--blue-600, #06f);
  &:disabled {
    background: var(--gray-scale-gray-100, #f5f5fa);
  }

  /* body1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
  border-color: transparent;
`;
