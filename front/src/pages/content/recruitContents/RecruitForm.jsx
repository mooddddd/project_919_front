import { FormContent } from "../../styled";
import { Input, Button, Textarea } from "../../../common";

export const RecruitForm = () => {
  const height = "1.5rem";

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    // 엑시오스로 백으로 post 한 다음 저장시키면 됨!
  };

  return (
    <>
      <FormContent method="post">
        <ul>
          <li>
            <div className="left" name="platformName">
              플랫폼
            </div>
            <select>
              <option>유튜브</option>
              <option>넷플릭스</option>
              <option>왓챠</option>
              <option>어쩌구</option>
            </select>
          </li>

          <li>
            <div className="left" name="planName">
              플랜 종류
            </div>
            <select /> <select />
          </li>

          <li>
            <div className="left" name="subject">
              글제목
            </div>
            <Input
              width="30rem"
              height={height}
              placeholder="(게시글의 제목을 입력해주세요. 파티원을 모집하기 위한 적극적인 어필이 필요합니다!)"
            />
          </li>

          <li>
            <div className="left">모집인원</div>
            <Input type="number" width="4rem" height={height} /> 명
          </li>

          <li>
            <div className="left" name="startDate">
              예상 시작 날짜
            </div>
            <Input type="date" width="9rem" height={height} />
          </li>

          <li>
            <div className="left" name="endDate">
              예상 종료 날짜
            </div>
            <Input type="date" width="9rem" height={height} />
          </li>

          <li>
            <div className="left" name="openChatLink">
              오픈채팅방 링크
            </div>
            <Input
              width="80%"
              height={height}
              placeholder="(파티원들끼리 소통할 채팅방의 링크를 입력해주세요.)"
            />
          </li>

          <li>
            <div className="left" name="content">
              공지사항
            </div>
            <Textarea
              width="80%"
              height="10rem"
              placeholder="(파티원들이 서로 공유할 공지사항입니다. 자세할수록 좋아요.)"
            />
          </li>

          <li>
            <div className="left">예상금액</div>
            500 만 원
          </li>
        </ul>
        <Button
          type="submit"
          width="15rem"
          height="3rem"
          onClick={clickHandler}
        >
          파티 생성!
        </Button>
      </FormContent>
    </>
  );
};
