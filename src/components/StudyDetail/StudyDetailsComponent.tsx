import React, { useState, useEffect } from "react";
import {
    BackgroundImageFrame, CategoryLabel,
    DetailInfoWrap, TitleArea,
    DetailTopArea, InfoDetail,
    InfoTitle, UserWrap, UserImage, UserName,
    TitleWrap, DetailText, DetailInfo, MiddleLine, DetailContents, Dday,
} from "../../styled/studyDetail/studyDetailStyles";
// import { setAvatar } from "../../utils/avatarUtils";
import Icon from "../../shared/ui/Icon";

interface StudyDetailsComponentProps {
    imageUrl?: string;
    avatarNum: number;
}

export default function StudyDetailsComponentReact({ avatarNum, imageUrl }: StudyDetailsComponentProps) {


    return (
      <>
          <DetailTopArea>
              <BackgroundImageFrame imageUrl={imageUrl || ""} />
              <DetailInfoWrap>
                  <InfoTitle>
                      <CategoryLabel>카테고리</CategoryLabel>
                      <TitleArea>
                          <UserWrap>
                              <UserImage>
                                <Icon path={`avatar`+avatarNum} width={"28px"} height={"28px"} borderRadius={'28px'} backgroundColor={'lightgray 50% / cover no-repeat, #D9D9D9'} />
                              </UserImage>
                              <UserName>user name</UserName>
                          </UserWrap>
                          <TitleWrap>Title~</TitleWrap>
                      </TitleArea>
                  </InfoTitle>
                  <InfoDetail>
                      <DetailInfo>
                              <Icon path={"mapicon"} width={"16px"} height={"16px"} />
                          <DetailText>
                              지역 &middot; 시간
                          </DetailText>
                      </DetailInfo>
                      <Dday>모집 마감 D-300</Dday>
                  </InfoDetail>
                  <MiddleLine />
              </DetailInfoWrap>
          </DetailTopArea>
          <DetailContents>
              <Icon path={'detailLmg'} width={'100%'} height={'100%'}/>
          </DetailContents>
      </>
    );
}