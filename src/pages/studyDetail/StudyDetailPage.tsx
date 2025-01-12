import MapComponent from '../../components/StudyDetail/MapComponent';
import StoreListComponent from '../../components/StudyDetail/StoreListComponent';
import { useState } from 'react';
import TopBar from '../../shared/ui/TopBar';
import StudyDetailsComponent from '../../components/StudyDetail/StudyDetailsComponent';
import BookerListComponent from '../../components/StudyDetail/BookerListComponent';
import Button from '../../shared/ui/Button';
import {
  ButtonWrap,
  DetailFrame,
} from '../../styled/studyDetail/studyDetailStyles';

export default function StudyDetailPage() {
  const [cafes, setCafes] = useState<any[]>([]);
  return (
    <DetailFrame>
      <TopBar pageName="studydetail">스터디 내역</TopBar>
      <StudyDetailsComponent
        avatarNum={2}
      />
      <BookerListComponent  avatarNum={1}/>
      <MapComponent />
      <StoreListComponent cafes={cafes} />
      <ButtonWrap>
        <Button>참가하기</Button>
      </ButtonWrap>
    </DetailFrame>
  );
}
