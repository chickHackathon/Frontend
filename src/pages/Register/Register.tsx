import RegisterForm from '../../components/Register/RegisterForm';
import RegisterTitle from '../../components/Register/RegisterTitle';
import TopBar from '../../components/Register/TopBar';

const Register = () => {
  return (
    <>
      <TopBar>회원가입</TopBar>
      <RegisterTitle />
      <RegisterForm />
    </>
  );
};
export default Register;
