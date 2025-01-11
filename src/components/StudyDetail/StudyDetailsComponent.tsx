import {
    BackgroundImageFrame, CategoryLabel,
    DetailInfoWrap, TitleArea,
    DetailTopArea, InfoDetail,
    InfoTitle, UserWrap, UserImage, UserName,
    TitleWrap, DetailText, DetailInfo, MiddleLine, DetailContents, Dday,
} from "../../styled/studyDetail/studyDetailStyles";
import {useEffect, useState} from "react";
import {setAvatar} from "../../utils/avatarUtils";
import Icon from "../../shared/ui/Icon";

interface StudyDetailsComponentProps {
    imageUrl?: string;
    avatarNum: number;
}
export default function StudyDetailsComponentReact({ avatarNum, imageUrl }: { avatarNum: number, imageUrl?: string }) {
    const [avatarUrl, setAvatarUrl] = useState<string>("");

    useEffect(() => {
        setAvatar(avatarNum).then(url => setAvatarUrl(url));
    }, [avatarNum]);

    if (!avatarUrl) {
        return <div>Loading...</div>;
    }
    return (
        <>
        <DetailTopArea>
            <BackgroundImageFrame imageUrl={imageUrl || ""} />
            <DetailInfoWrap>
                <InfoTitle>
                    <CategoryLabel>카테고리</CategoryLabel>
                    <TitleArea>
                        <UserWrap>
                            <UserImage src={avatarUrl}/>
                            <UserName>user name</UserName>
                        </UserWrap>
                        <TitleWrap>Title~</TitleWrap>
                    </TitleArea>
                </InfoTitle>
                <InfoDetail>
                    <DetailInfo>
                        <Icon path={"mapicon"} width={"16px"} height={"16px"}/>
                        <DetailText>
                            지역 &middot 시간
                        </DetailText>
                    </DetailInfo>
                    <Dday>모집 마감 D-300</Dday>
                </InfoDetail>
                <MiddleLine />
            </DetailInfoWrap>
        </DetailTopArea>
        <DetailContents>내용djnflskdjnflsdjfnslkdfnlsakdfnjasldnfsaldfbsdkjhfbkdjshfbsdkjhbfkjsdhfb</DetailContents>
        </>
    );
}