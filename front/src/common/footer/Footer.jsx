import { NavLink } from "react-router-dom";
import { FooterWrapper, FootWrap, FootIcon, FootInfo } from "../footer";

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FootWrap>
          <NavLink>
            <FootIcon>
              <img className="giticon" alt="github" src="/img/github.png" />
            </FootIcon>
          </NavLink>
          <NavLink>
            <FootIcon>
              <img className="gmailicon" alt="gmail" src="/img/gmail.png" />
            </FootIcon>
          </NavLink>
          <NavLink>
            <FootIcon>
              <img
                className="instaicon"
                alt="instagram"
                src="/img/instagram.png"
              />
            </FootIcon>
          </NavLink>
          <NavLink>
            <FootIcon>
              <img
                className="facebookicon"
                alt="github"
                src="/img/facebook.png"
              />
            </FootIcon>
          </NavLink>
        </FootWrap>
        <FootInfo>copyrightⓒ 2023 All rights reserved by 919</FootInfo>
      </FooterWrapper>
    </>
  );
};