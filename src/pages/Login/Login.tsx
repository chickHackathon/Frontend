import styled from 'styled-components';
import LoginForm from '../../components/Login/LoginForm';
import MainTitle from '../../components/Login/MainTitle';
import Icon from '../../shared/ui/Icon';

const Login = () => {
  return (
    <LoginDiv>
      <MainTitle />
      <IconDiv>
        <Icon path="mascot" width="303" height="173" />
      </IconDiv>
      <LoginForm />
    </LoginDiv>
  );
};

export default Login;

const LoginDiv = styled.div`
  padding: 20px;
`;

const IconDiv = styled.div`
  position: absolute;
  right: 0;
  top: 300px;
`;
