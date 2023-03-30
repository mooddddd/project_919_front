import { CategoryStyled } from "../../styled";
import { NavLink } from "react-router-dom";
import { Button } from "../../../common";

export const Category = () => {
  return (
    <>
      <CategoryStyled>
        <ul>
          <li>
            <NavLink to="#">전체</NavLink>
          </li>
          <li>
            <NavLink to="#">유튜브</NavLink>
          </li>
          <li>
            <NavLink to="#">넷플릭스</NavLink>
          </li>
          <li>
            <NavLink to="#">디플</NavLink>
          </li>
        </ul>

        <Button width="10rem" height="2rem" color="red">
          <NavLink to="/community/recruit/write">파티장 되기</NavLink>
        </Button>
      </CategoryStyled>
    </>
  );
};
