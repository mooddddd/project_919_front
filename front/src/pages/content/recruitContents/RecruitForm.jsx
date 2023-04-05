import { FormStyled } from "../../styled";
import { Input, Button, Textarea } from "../../../common";
import { request } from "../../../utils";
import { useInput } from "../../../hooks";
import { InputStyled, TextStyled } from "../../../common/box/styled"; // state 때문에 넣어줌ㅠ..
import { useEffect, useState } from "react";

export const RecruitForm = () => {
  const height = "1.5rem";

  const plan = useInput("");
  const title = useInput("");
  const member = useInput("");
  const startDate = useInput("");
  const endDate = useInput("");
  const openChatLink = useInput("");
  const content = useInput("");
  const [platformList, setPlatformList] = useState(["플랫폼을 선택하세요"]);
  const [selectedOtt, setSelectedOtt] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await request.get("recruit/write");
        const list = response.data;
        setPlatformList(list);
      } catch (e) {
        console.log(`error`);
      }
    })();
  }, []);

  const ottList = platformList.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  const test = async (e) => {
    setSelectedOtt(e.target.value);
    const string = e.target.value;
    const { data } = await request.post("recruit/write/plan", { string });
    console.log(data);
    // e.target.value로 선택된 값 다시 엑시오스로 백으로 넘겨? 백에서 플랜 찾아와서 넘겨!!!!
    // 넘어온 플랜들은 상태로 저장해서 뽑아쓰기,,?
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let body = {
      platformName: selectedOtt,
      plan: plan.value,
      title: title.value,
      member: member.value,
      openChatLink: openChatLink.value,
      content: content.value,
    };
    console.log(body);
    const result = await request.post("recruit/write", body);
    //   endDate.value // 2023-04-05
  };

  return (
    <>
      <FormStyled onSubmit={submitHandler}>
        <ul>
          <li>
            <div className="left" name="platformName">
              플랫폼
            </div>
            <select value={selectedOtt} onChange={test}>
              {ottList}
            </select>
          </li>

          <li>
            <div className="left" name="planName" {...plan}>
              플랜 종류
            </div>
            <select></select>
            <select></select>
          </li>

          <li>
            <div className="left" name="title">
              글제목
            </div>
            <InputStyled
              width="80%"
              height={height}
              placeholder="(게시글의 제목을 입력해주세요. 파티원을 모집하기 위한 적극적인 어필이 필요합니다!)"
              {...title}
              required
            />
          </li>

          <li>
            <div className="left">모집인원</div>
            <InputStyled
              type="number"
              width="4rem"
              height={height}
              {...member}
            />
            명
          </li>

          <li>
            <div className="left" name="startDate">
              예상 시작 날짜
            </div>
            <InputStyled
              type="date"
              width="9rem"
              height={height}
              {...startDate}
            />
          </li>

          <li>
            <div className="left" name="endDate">
              예상 종료 날짜
            </div>
            <InputStyled
              type="date"
              width="9rem"
              height={height}
              {...endDate}
            />
          </li>

          <li>
            <div className="left" name="openChatLink">
              오픈채팅방 링크
            </div>
            <InputStyled
              width="80%"
              height={height}
              placeholder="(파티원들끼리 소통할 채팅방의 링크를 입력해주세요.)"
              {...openChatLink}
            />
          </li>

          <li>
            <div className="left" name="content">
              공지사항
            </div>
            <TextStyled
              width="80%"
              height="10rem"
              placeholder="(파티원들이 서로 공유할 공지사항입니다. 자세할수록 좋아요.)"
              {...content}
            />
          </li>

          <li>
            <div className="left">예상금액</div>
            500 만 원
          </li>
        </ul>
        <Button type="submit" width="15rem" height="3rem" color="red">
          파티 생성!
        </Button>
      </FormStyled>
    </>
  );
};
