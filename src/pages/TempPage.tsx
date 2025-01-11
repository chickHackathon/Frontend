import React from 'react';
import {
  OnboardingContainer,
  Title
} from '../styled/OnboardingStyles';
import {useNavigate} from "react-router-dom";

const TempPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <OnboardingContainer>
            <Title>임시 라우터 접근 페이지</Title>
            <button onClick={() => navigate('/login')}>로그인 페이지 접근</button>
            <button onClick={() => navigate('/signup')}>회원가입 페이지 접근</button>
            <button onClick={() => navigate('/studycreate')}>스터디 생성 페이지 접근</button>
            <button onClick={() => navigate('/studylist')}>스터디 리스트 페이지 접근</button>
            <button onClick={() => navigate('/study-detail')}>스터디 디테일 페이지 접근</button>
            <button onClick={() => navigate('/study-record')}>스터디 레코드 페이지 접근</button>
        </OnboardingContainer>
    );
};

export default TempPage;