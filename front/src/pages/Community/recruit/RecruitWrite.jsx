import { BoardLayout } from "../../../common";
import { RecruitWrap } from "../../styled";
import { RecruitTop, RecruitForm } from "../../content/recruitContents";

export const RecruitWrite = () => {
  const platform = [
    "-플랫폼 선택-",
    "유튜브",
    "넷플릭스",
    "디즈니플러스",
    "웨이브",
    "티빙",
    "왓챠",
  ];

  return (
    <>
      <BoardLayout>
        <RecruitWrap>
          <RecruitTop />
          <RecruitForm platform={platform} />
        </RecruitWrap>
      </BoardLayout>
    </>
  );
};

// { 플랫폼_선택 },
// { 유튜브 },
// { 넷플릭스 },
// { 디즈니플러스 },
// { 웨이브 },
// { 티빙 },
// { 왓챠 },
