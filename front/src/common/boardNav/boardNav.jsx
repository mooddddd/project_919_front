import { Wrap, Nav } from "./styled";
import { Input } from "../box";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";

export const BoardNav = () => {
  // const category = [
  //     {path : "/recruit", name:"Recruit"},
  //     {path : "/infoboard", name:"infoBoard"},
  //     {path : "/freeboard", name:"freeBoard"}
  // ]

  return (
    <>
      <Wrap>
        <Nav>
          <ul>
            <li>
              <NavLink to="/community/recruit/list">파티구하기</NavLink>
            </li>

            <li>
              <NavLink to="/community/info/list">정보</NavLink>
            </li>

            <li>
              <NavLink to="/community/free/list">잡담</NavLink>
            </li>
          </ul>
          <div>
            <Input width="12rem" height="1.3rem" />{" "}
            <Button width="3rem" height="1.8rem" color="red">
              검색
            </Button>
          </div>
        </Nav>
      </Wrap>
    </>
  );
};

export default BoardNav;