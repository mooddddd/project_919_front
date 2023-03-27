import styled from "styled-components";

export const Nav = styled.div`
width: 80%;
margin: 0 auto;

    ul {
        display: flex;
    }

    li {
        padding: 0 1rem;
        margin-left: 1rem;
        margin-top: 1.5rem;
        
    }

    a {
        color: #fff;
        &:hover {
            color: #FF5858;
            font-weight: bold;
        }
    }
`