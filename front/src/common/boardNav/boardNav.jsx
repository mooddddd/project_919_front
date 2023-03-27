import {Wrap, Nav} from "./styled"
import { NavLink } from "react-router-dom"

export const BoardNav = ()=>{
    // const category = [
    //     {path : "/recruit", name:"Recruit"},
    //     {path : "/infoboard", name:"infoBoard"},
    //     {path : "/freeboard", name:"freeBoard"}
    // ]

    return <>
    <Wrap>
        <Nav>
        <ul>
            <li>
                <NavLink to="/recruit">파티구하기</NavLink>
            </li>

            <li>
                <NavLink to="/infoboard">정보</NavLink>
            </li>

            <li>
                <NavLink to="/freeboard">잡담</NavLink>
            </li>
        </ul>
        
        </Nav>
    </Wrap>
    </>
}

export default BoardNav