import { BoardLayout } from "../../../common"
import { Allwrap } from "../../styled"
import { Category, } from "../../content/recruitContents"

export const RecruitView = () => {
    return <>
    <BoardLayout>
        <Allwrap>
            <Category/>
        </Allwrap>
    </BoardLayout>
    </>
}