import { Wrapper, Parallax,  YoutubeWrapper, YoutubeWrap, YoutubeLogoWrap, NetflixWrapper, NetflixLogoWrap, NetflixWrap, WatchaWrapper, WatchaWrap, WatchaLogoWrap } from "../styled"

export const MainContent = () => {
    return( 
        <>
            <Wrapper>
                {/* <Parallax> */}
                    <WatchaWrapper>
                        <WatchaLogoWrap>
                            <img className="mainWatcha mainWatchaLogo" src="img/platformLogo/Watcha.png" alt="mainWatchaLogo" />
                        </WatchaLogoWrap>
                        <WatchaWrap />
                    </WatchaWrapper>
                {/* </Parallax> */}
                {/* <Parallax> */}
                    <NetflixWrapper>
                        <NetflixLogoWrap>
                            <img className="mainNetflix mainNetflixLogo" src="img/platformLogo/netflix.png" alt="mainNetflixLogo" />
                        </NetflixLogoWrap>
                        <NetflixWrap />
                    </NetflixWrapper>
                {/* </Parallax> */}
                {/* <Parallax> */}
                    <YoutubeWrapper>
                            <YoutubeLogoWrap>
                                <img className="mainYoutube mainYoutubeLogo" src="img/platformLogo/youtube.png" alt="mainYoutubeLogo" />
                            </YoutubeLogoWrap>
                            <YoutubeWrap />
                    </YoutubeWrapper>
                {/* </Parallax> */}
            </Wrapper>
        </>
    )
}