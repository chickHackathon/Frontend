import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  disabled?: boolean;
}

const Button = ({ children, disabled }: ButtonProps) => {
  return (
    <>
      <Buttons disabled={disabled}>{children}</Buttons>
    </>
  );
};

export default Button;

const Buttons = styled.button`
  display: flex;
  width: 100%;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  outline: none;
  background: ${(props) => (props.disabled ? '#f5f5fa' : '#06f')};
  color: ${(props) => (props.disabled ? '#D7D7DC' : '#FFFFFF')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};

  /* body1 */
  font-family: 'Pretendard-Medium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
  border-color: transparent;
`;
