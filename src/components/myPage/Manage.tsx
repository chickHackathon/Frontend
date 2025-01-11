import styled from 'styled-components';
import { useState } from 'react';

interface ProfileProps {
  profileImage: string;
}

interface ManageProps extends ProfileProps {
  title: string;
  name: string;
}

const Manage = ({ title, profileImage, name }: ManageProps) => {
  const [isAccepted, setIsAccepted] = useState<null | true | false>(null);
  const [clicked, setClicked] = useState<'reject' | 'accept' | 'pending'>(
    'pending'
  );

  const handleReject = () => {
    setIsAccepted(false);
    setClicked('reject');
  };

  const handleAccept = () => {
    setIsAccepted(true);
    setClicked('accept');
  };

  return (
    <>
      <ManageContainer>
        {isAccepted == null ? (
          <PendingContainer>
            <PendingDiv>
              <PendingAlertDiv>
                <AlertP>스터디 참가 신청이 도착했어요!</AlertP>
                <StudyP>{title}</StudyP>
              </PendingAlertDiv>
              <ProfileContainer>
                <Profile src={profileImage} />
                <ProfileP>{name}</ProfileP>
              </ProfileContainer>
            </PendingDiv>
            <AcceptContainer>
              <RejectButton onClick={handleReject}>
                다음에 함께해요!
              </RejectButton>
              <AcceptButton onClick={handleAccept}>승인</AcceptButton>
            </AcceptContainer>
          </PendingContainer>
        ) : clicked == 'pending' ? (
          <></>
        ) : (
          <FinishedContainer>
            {isAccepted == true ? (
              <FinishedDiv>
                <FinishedP>
                  참가신청을 <FinishedAcceptSpan> 승인</FinishedAcceptSpan>{' '}
                  했어요.
                </FinishedP>
                <StudyP>{title}</StudyP>
                <ProfileContainer>
                  <Profile src={profileImage} />
                  <ProfileP>{name}</ProfileP>
                </ProfileContainer>
              </FinishedDiv>
            ) : (
              <FinishedDiv>
                <FinishedP>
                  참가신청을 <FinishedRejectSpan>거절</FinishedRejectSpan>
                  했어요. 다음에 함께해요!
                </FinishedP>
                <StudyP>{title}</StudyP>
                <ProfileContainer>
                  <Profile src={profileImage} />
                  <ProfileP>{name}</ProfileP>
                </ProfileContainer>
              </FinishedDiv>
            )}
          </FinishedContainer>
        )}
      </ManageContainer>
    </>
  );
};

export default Manage;

const ManageContainer = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const PendingContainer = styled.div`
  display: flex;
  width: 315px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid #06f;
  background: #fff;

  /* 리스트 드롭쉐도우 */
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
`;

const PendingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const PendingAlertDiv = styled.div`
  display: flex;
  width: 315px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const AlertP = styled.p`
  height: 22px;
  align-self: stretch;
  overflow: hidden;
  color: #06f;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;

  /* H2 */
  font-family: 'Pretendard-bold';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: -0.96px;
`;

const StudyP = styled.p`
  height: 22px;
  align-self: stretch;
  overflow: hidden;
  color: #afafb4;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;

  /* caption1 */
  font-family: 'Pretendard-SemiBold';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18px */
`;

const ProfileContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Profile = styled.img`
  width: 28px;
  height: 28px;
  fill: #e6e6eb;
`;

const ProfileP = styled.p`
  color: #323237;

  /* body2 */
  font-family: 'Pretendard-Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.7px;
  margin: 0;
`;

const AcceptContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const RejectButton = styled.div`
  display: flex;
  width: 153px;
  padding: 4px 0;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  background: #f5f5fa;
  color: #afafb4;

  /* body1 */
  font-family: 'Pretendard-Medium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
`;

const AcceptButton = styled.button`
  display: flex;
  width: 153px;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  background: #06f;
  color: #fff;

  /* body1 */
  font-family: 'Pretendard-Medium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
  border-width: 0px;
`;

const FinishedContainer = styled.div`
  display: flex;
  width: 335px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid #f5f5fa;
  background: #fff;

  /* 리스트 드롭쉐도우 */
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
`;

const FinishedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const FinishedP = styled.p`
  height: 22px;
  display: flex;
  align-self: stretch;
  overflow: hidden;
  color: #afafb4;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;

  /* body1 */
  font-family: 'Pretendard-Medium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.48px;
`;

const FinishedAcceptSpan = styled.div`
  padding-left: 4px;
  color: #06f;

  /* body1 */
  font-family: 'Pretendard-Medium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.48px;
`;

const FinishedRejectSpan = styled.div`
  padding-left: 4px;
  color: #ff6e6e;

  /* body1 */
  font-family: 'Pretendard-Medium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.48px;
`;
