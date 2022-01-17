import styled from "styled-components";

export const MainButtonStyle = styled.button`
    background-color:${props=>props.theme.mainColor2};
    border-radius: 3px;
    text-align:center;
    vertical-align: middle;
    color:#fff;
    padding:6px 24px;
    font-size:13px;
    font-weight:${props=>props.theme.weight2};
    border: none;
    outline: none;
    transition:all 0.2s ease;
    &:hover{
        background-color:#05947C;
    }
`