import { Wrapper, MainCover, YoutubeWrapper, YoutubeWrap, YoutubeLogoWrap, NetflixWrapper, NetflixLogoWrap, NetflixWrap, WatchaWrapper, WatchaWrap, WatchaLogoWrap } from "../styled"

export const MainContent = () => {
    return( 
        <>
            <Wrapper>
                    <WatchaWrapper>
                        <WatchaLogoWrap>
                            <img class="mainWatchaLogo" src="img/platformLogo/Watcha.png" alt="mainWatchaLogo" />
                        </WatchaLogoWrap>
                        <WatchaWrap />
                    </WatchaWrapper>
                    <NetflixWrapper>
                        <NetflixLogoWrap>
                            <img class="mainNetflixLogo" src="img/platformLogo/netflix.png" alt="mainNetflixLogo" />
                        </NetflixLogoWrap>
                        <NetflixWrap />
                    </NetflixWrapper>
                    <YoutubeWrapper>
                            <YoutubeLogoWrap>
                                <img class="mainYoutubeLogo" src="img/platformLogo/youtube.png" alt="mainYoutubeLogo" />
                            </YoutubeLogoWrap>
                            <YoutubeWrap />
                    </YoutubeWrapper>
            </Wrapper>
        </>
    )
}