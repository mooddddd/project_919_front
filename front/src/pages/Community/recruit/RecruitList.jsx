import { BoardLayout, Button } from "../../../common";
import { Allwrap, PostWrapper, PostOneStyled } from "../../styled";
import { Category, PostOne } from "../../content/recruitContents";

export const RecruitList = () => {
  const data = [
    {
      id: 1,
      star: false,
      platformImg: "/img/platformLogo/youtube.png",
      limit: 5,
      price: 1100,
      subject:
        "제목입니다ㅏㅏㅏㅏ 제목 두줄 넘어가기기기기기기기이이이이이이잉이이이이이잉이이이이이이이이이이이",
      userNick: "Nicknameeeee",
    },
    {
      id: 2,
      star: false,
      platformImg: "/img/platformLogo/netflix.png",
      limit: 4,
      price: 2200,
      subject: "제목입니다ㅏㅏㅏㅏ2222 두줄ㄹㅇㅇ라어라어린얼ㄴㅇㄹ너ㅐㅑ",
      userNick: "Nicknameeeee111",
    },
    {
      id: 3,
      star: false,
      platformImg: "/img/platformLogo/tving.png",
      limit: 3,
      price: 3300,
      subject: "제목입니다ㅏㅏㅏㅏ33333",
      userNick: "Nicknameeeee222",
    },
    {
      id: 4,
      star: false,
      platformImg: "/img/platformLogo/watcha.png",
      limit: 3,
      price: 3300,
      subject: "제목입니다ㅏㅏㅏㅏ33333",
      userNick: "Nicknameeeee222",
    },
    {
      id: 5,
      star: false,
      platformImg: "/img/platformLogo/wavve.png",
      limit: 3,
      price: 3300,
      subject: "제목입니다ㅏㅏㅏㅏ33333",
      userNick: "Nicknameeeee222",
    },
    {
      id: 6,
      star: false,
      platformImg: "/img/platformLogo/tving.png",
      limit: 3,
      price: 3300,
      subject: "제목입니다ㅏㅏㅏㅏ33333",
      userNick: "Nicknameeeee222",
    },
    {
      id: 7,
      star: false,
      platformImg: "/img/platformLogo/netflix.png",
      limit: 3,
      price: 3300,
      subject: "제목입니다ㅏㅏㅏㅏ33333",
      userNick: "Nicknameeeee222",
    },
    {
      id: 8,
      star: false,
      platformImg: "/img/platformLogo/wavve.png",
      limit: 3,
      price: 3300,
      subject: "제목입니다ㅏㅏㅏㅏ33333",
      userNick: "Nicknameeeee222",
    },
    {
      id: 9,
      star: false,
      platformImg: "/img/platformLogo/youtube.png",
      limit: 3,
      price: 3300,
      subject: "제목입니다ㅏㅏㅏㅏ33333",
      userNick: "Nicknameeeee222",
    },
  ]; // 엑시오스로 데이터 받아와서 postone에 담아주면 댐

  return (
    <>
      <BoardLayout>
        <Allwrap>
          <Category />
          <PostWrapper>
            <PostOne data={data} />
          </PostWrapper>
        </Allwrap>
      </BoardLayout>
    </>
  );
};
