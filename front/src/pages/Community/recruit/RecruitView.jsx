import { BoardLayout } from "../../../common";
import { Allwrap, ViewWrap } from "../../styled";
import { Category, ViewOne } from "../../content/recruitContents";

export const RecruitView = () => {
  const data = {
    id: 1,
    platformImg: "/img/platformLogo/youtube.png",
    planName: "Family Plan",
    price: "699",
    countryCode: "ARS",
    limit: "5",
    memberCount: "3",
    userNick: "은지짱!",
    startDate: "2023-03-23",
    endDate: "2050-12-31",
    openChatLink: "http://localhost:3009idojifaiosdfjaso",
    subject:
      "유튜브 터키로 같이 이민가실 분 구해요~~~~ 제목 대박 길게 해도 어저고 저저고 되게끔~~~",
    content:
      "✅ 본인 유튜브 계정이 유튜브 프리미엄으로 바뀌고 유튜브 뮤직도 사용가능합니다.",

    perPrice: "4,500",
    //   얘는 백에서 계산 해와야 하나,,/./??/
  };

  return (
    <>
      <BoardLayout>
        <Allwrap>
          <Category />
          <ViewWrap>
            <ViewOne data={data} />
          </ViewWrap>
        </Allwrap>
      </BoardLayout>
    </>
  );
};
