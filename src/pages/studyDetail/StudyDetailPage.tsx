import MapComponent from '../../components/StudyDetail/MapComponent';
import StoreListComponent from '../../components/StudyDetail/StoreListComponent';
import { useState } from 'react';
import TopBar from '../../shared/ui/TopBar';
import StudyDetailsComponent from '../../components/StudyDetail/StudyDetailsComponent';
import BookerList from '../../components/StudyDetail/BookerList';
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
        imageUrl="백엔드에서_받은_이미지_URL"
        avatarNum={1}
      />
      <BookerList />
      <MapComponent setCafes={setCafes} />
      <StoreListComponent cafes={cafes} />
      <ButtonWrap>
        <Button>참가하기</Button>
      </ButtonWrap>
    </DetailFrame>
  );
}
