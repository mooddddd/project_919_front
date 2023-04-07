import { Header, Footer } from "../common"
import { MainContentTop, MainContent } from "./index"

export const Main = () => {
    return(
        <>
            <div className="mainimg">
                <Header />
                <MainContentTop />
                <MainContent />
                <Footer />
            </div>
        </>
    )
}