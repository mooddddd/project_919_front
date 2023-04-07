import { MainConTopWrapper, NetflixSlide, WatchaSlide, YoutubeSlide, Parallax} from "../styled"

export const MainContentTop = () => {
    return(
        <>
            <MainConTopWrapper>
                <YoutubeSlide />
                <NetflixSlide />
                <WatchaSlide />
            </MainConTopWrapper>
        </>
    )
}
