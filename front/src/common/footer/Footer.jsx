import { NavLink } from 'react-router-dom'
import { FooterWrapper, FootWrap, FootIcon, FootInfo } from '../footer'
const publicPath = process.env.PUBLIC_URL

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FootWrap>
          <NavLink>
            <FootIcon>
              <img
                className="giticon"
                alt="github"
                src={`${publicPath}/img/github.png`}
              />
            </FootIcon>
          </NavLink>
          <NavLink>
            <FootIcon>
              <img
                className="gmailicon"
                alt="gmail"
                src={`${publicPath}/img/gmail.png`}
              />
            </FootIcon>
          </NavLink>
          <NavLink>
            <FootIcon>
              <img
                className="instaicon"
                alt="instagram"
                src={`${publicPath}/img/instagram.png`}
              />
            </FootIcon>
          </NavLink>
          <NavLink>
            <FootIcon>
              <img
                className="facebookicon"
                alt="facebook"
                src={`${publicPath}/img/facebook.png`}
              />
            </FootIcon>
          </NavLink>
        </FootWrap>
        <FootInfo>copyrightⓒ 2023 All rights reserved by 919</FootInfo>
      </FooterWrapper>
    </>
  )
}
