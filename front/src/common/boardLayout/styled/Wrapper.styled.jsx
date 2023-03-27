import styled from "styled-components";

export const Wrap = styled.div`
margin: 0 auto;
padding: 3rem;
position: relative;
z-index: 1;

&::before{
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("../../../../img/constella.jpg");
    opacity: 0.5;
    position: absolute;
    z-index: -1;
}
`