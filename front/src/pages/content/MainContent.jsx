import { Wrapper, YoutubeWrapper, YoutubeWrap, YoutubeLogoWrap, NetflixWrapper, NetflixLogoWrap, NetflixWrap, WatchaWrapper, WatchaWrap, WatchaLogoWrap, Parallax } from "../styled"

export const MainContent = () => {
    return( 
        <>
            <Wrapper>
                    <Parallax />
                    <Parallax>
                    <WatchaWrapper>
                        <WatchaLogoWrap>
                            <img className="mainWatcha mainWatchaLogo" src="img/platformLogo/Watcha.png" alt="mainWatchaLogo" />
                        </WatchaLogoWrap>
                        <WatchaWrap />
                    </WatchaWrapper>
                    </Parallax>
                    <Parallax />
                    <Parallax>
                    <NetflixWrapper>
                        <NetflixLogoWrap>
                            <img className="mainNetflix mainNetflixLogo" src="img/platformLogo/netflix.png" alt="mainNetflixLogo" />
                        </NetflixLogoWrap>
                        <NetflixWrap />
                    </NetflixWrapper>
                    </Parallax>
                    <Parallax />
                    <Parallax>
                    <YoutubeWrapper>
                            <YoutubeLogoWrap>
                                <img className="mainYoutube mainYoutubeLogo" src="img/platformLogo/youtube.png" alt="mainYoutubeLogo" />
                            </YoutubeLogoWrap>
                            <YoutubeWrap />
                    </YoutubeWrapper>
                    </Parallax>
                    <Parallax />
            </Wrapper>
        </>
    )
}