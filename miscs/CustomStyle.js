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
    outline: none !important;
    border:none !important;
    transition:all 0.2s ease;
    position:relative;
    z-index:2;
    &:hover{
        background-color:#05947C;
    }
`

export const TitleStyle = styled.div`
    color: ${props=>props.theme.textColor};
    font-weight: 300;
    font-size: 30px;
    text-align:center;
    margin-bottom:22px;
`