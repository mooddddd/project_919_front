import { Header, Footer } from "../common"
import { MainContentTop, MainContent } from "./index"

export const Main = () => {
    return(
        <>
            <Header />
            <MainContentTop />
            <MainContent />
            <Footer />
        </>
    )
}