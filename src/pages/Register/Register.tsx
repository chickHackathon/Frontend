import styled from 'styled-components';
import RegisterForm from '../../components/Register/RegisterForm';
import RegisterTitle from '../../components/Register/RegisterTitle';
import TopBar from '../../components/Register/TopBar';

const Register = () => {
  return (
    <RegisterDiv>
      <TopBar>회원가입</TopBar>
      <RegisterTitle />
      <RegisterForm />
    </RegisterDiv>
  );
};
export default Register;

const RegisterDiv = styled.div`
  width: 375px;
  height: 812px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
