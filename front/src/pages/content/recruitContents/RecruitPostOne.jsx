import { PostOneStyled } from "../../styled";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export const PostOne = ({ data }) => {
  const list = data.map((v) => {
    return (
      <>
        <PostOneStyled key={v.id.toString()}>
          <NavLink to={`/community/recruit/view/${v.id}`}>
            <div className="star">💛</div>

            <div className="logoImg">
              <img src={`${v.platformImg}`} alt="platform Logo" />
            </div>

            <div className="content">
              <div className="limitNprice">
                <div>
                  <span className="limit">{v.limit - 1}</span>명{" "}
                  <span className="ing"> 모집중! </span>
                </div>

                <div>
                  월 <span className="price">{v.price / v.limit}</span> 원
                </div>
              </div>

              <div className="subjec">
                <span>{v.subject}</span>
              </div>

              <div className="nickname">
                <img src="/Users/eunzi/reactProject/front/public/img/checkIcon.png" />
                <span>{v.userNick}</span>
              </div>
            </div>
          </NavLink>
        </PostOneStyled>
      </>
    );
  });

  return list;
};

{
  /* <div>별</div>
<div>
    <div>이미지</div>
    <div>3명 모집중  월 300만 원</div>
    <div>제목제목</div>
    <div>닉네임칸</div>

</div> */
}
