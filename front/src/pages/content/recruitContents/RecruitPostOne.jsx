import { PostOneStyled, PlatformImgStyled } from "../../styled";
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export const PostOne = ({ data }) => {
  const [heart, setHeart] = useState(false);

  const clickHeart = (e) => {
    setHeart(!heart);
  };

  const list = data.map((v) => {
    return (
      <>
        <PostOneStyled key={v.id.toString()}>
          <div className="star" onClick={clickHeart}>
            {heart ? "💛" : "🤍"}
          </div>
          <NavLink to={`/community/recruit/view/${v.id}`}>
            <div className="logoImg">
              <PlatformImgStyled src={`${v.platformImg}`} width="13rem" />
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
                <PlatformImgStyled src="/img/checkIcon.png" width="0.7rem" />
                <span> {v.userNick}</span>
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
