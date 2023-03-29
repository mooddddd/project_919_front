import { ViewOneStyled, PlatformImgStyled } from "../../styled";
import { Button } from "../../../common";
import { NavLink } from "react-router-dom";

export const ViewOne = ({ data }) => {
  return (
    <>
      <ViewOneStyled>
        <div>
          <PlatformImgStyled />
          <span>{data.planName}</span> /{" "}
          <span>
            {data.price} {data.countryCode}
          </span>{" "}
          현재 <span>{data.limit}</span> 중 <span>{data.memberCount}</span>이
          모였어요!
        </div>

        <Button width="10rem" height="2rem">
          <NavLink to="/community/recruit/list">목록으로</NavLink>
        </Button>
      </ViewOneStyled>
    </>
  );
};
