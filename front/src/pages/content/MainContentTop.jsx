import { MainConTopWrapper, NetflixSlide, WatchaSlide, YoutubeSlide} from "../styled"

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