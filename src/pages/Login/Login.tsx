import styled from 'styled-components';
// import LoginForm from '../../components/Login/LoginForm';
import MainTitle from '../../components/Login/MainTitle';

const Login = () => {
  return (
    <LoginDiv>
      <MainTitle />
      {/* <LoginForm /> */}
    </LoginDiv>
  );
};

export default Login;

const LoginDiv = styled.div`
  padding: 20px;
`;
