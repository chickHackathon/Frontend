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
  width: 335px;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  outline: none;
  background: ${(props) =>
    props.disabled
      ? 'var(--gray-scale-gray-100, #f5f5fa)'
      : 'var(--blue-600, #06f)'};
  color: ${(props) =>
    props.disabled
      ? 'var(--text-text-4, #D7D7DC)'
      : 'var(--text-text5, #FFFFFF)'};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};

  /* body1 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
  border-color: transparent;
`;
