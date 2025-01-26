import {
  BookerFrame,
  BookerList,
  BookerItem,
  BookerSubTitle,
  BookerTitle,
  BookerName,
} from '../../styled/studyDetail/BookerListStyled';
import Icon from '../../shared/ui/Icon';
import React from 'react';
import Booker from '../../data/bookerData';

interface StudyDetailsComponentProps {
  avatarNum: number;
}

export default function BookerListComponent({
  avatarNum,
}: StudyDetailsComponentProps) {
  return (
    <BookerFrame>
      <div>
        <BookerSubTitle>멤버 소개</BookerSubTitle>
        <BookerTitle>우리 반갑게 만나요</BookerTitle>
      </div>
      <BookerList>
        {Booker.map((booker) => (
          <BookerItem key={booker.id}>
            <Icon
              height="48px"
              path={booker.avatar}
              width="48px"
              borderRadius="50%"
            />
            <BookerName>{booker.name}</BookerName>
          </BookerItem>
        ))}
      </BookerList>
    </BookerFrame>
  );
}
