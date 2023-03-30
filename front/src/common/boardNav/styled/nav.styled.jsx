import styled from "styled-components";

export const Nav = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
justify-content: space-between;

    ul {
        display: flex;
    }
    li {
        justify-content: space-between;
        margin: 1.5rem;
        
    }
    a {
        color: #fff;
        &:hover {
            color: #FF5858;
            font-weight: bold;
        }
    }
    input {
        margin-top: 1.5rem;
    }
    button {
        display: inline-block !important;
    }
`