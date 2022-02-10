import styled from "styled-components";

export const MainButtonStyle = styled.button`
    background-color:${props=>props.color==="false"?`#fff`:props.theme.mainColor2};
    border-radius: 3px;
    text-align:center;
    vertical-align: middle;
    color: ${props=>props.color==="false"?`1px solid #000`:`#fff`};
    padding:6px 24px;
    font-size:13px;
    font-weight:${props=>props.theme.weight};
    // font-family:'SFProDisplaybold';
    outline: none !important;
    border:${props=>props.color==="false"?`1px solid #8a8d91`:`none`}; !important;
    transition:all 0.2s ease;
    position:relative;
    z-index:2;
    letter-spacing:0.2px;
    svg{
        position:absolute;
        ${props=>props.icon==='left'?`left: 5%;`:`right: 5%;`}
        top:32%;
        font-size:17px;
        color:${props=>props.color==="false"?`#8a8d91`:`#fff`};
    }
    &:hover{
        background-color: ${props=>props.color==="false"?`#d8d8d8`:`#05947C`};
    }
`

export const TitleStyle = styled.div`
    color: ${props=>props.theme.textColor};
    font-weight: 300;
    font-size: 30px;
    text-align:center;
    margin-bottom:22px;
`