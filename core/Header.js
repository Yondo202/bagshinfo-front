import React from 'react'
import styled from 'styled-components'
import {  MainButtonStyle } from "@/miscs/CustomStyle"

const Header = () => {
    return (
        <Parent >
            <Ghost />
            <Container >
                <div className="top_menus container">
                    <div className="left_sector ">
                        <div className="logo_par">
                            <img src="https://www.toptal.com/toptal-logo.png" alt="bagshinfo_logo" />
                        </div>
                        <div className="menu_par">
                            <div className="menus">Багш хайх</div>
                            <div className="menus">Сурах бичиг</div>
                        </div>
                    </div>

                    <div className="left_sector">
                        <div className="menu_par">
                            <MainButtonStyle type="button">Нэвтрэх</MainButtonStyle>
                            <div className="menus">Багшаар бүртгүүлэх</div>
                        </div>
                    </div>
                </div>
            </Container>
        </Parent>
    )
}

export default Header

// #d2d6e2 //grey color

const Parent = styled.div`
    position:relative;
`

const Ghost = styled.div`
    height: 82px;
    background-color:${props=>props.theme.background};
`

const Container = styled.div`
    position:absolute;
    top:0;
    right:0;
    width:100%;
    .top_menus{
        display:flex;
        aling-items:center;
        justify-content:space-between;
        height: 68px;
        width:100%;
        .menu_par{
            display:flex;
            align-items:center;
            height:100%;
            .menus{
                cursor:pointer;
                color:${props=>props.theme.textColor};
                font-size:${props=>props.theme.fontSize};
                margin-left: 17px;
                height:100%;
                display:flex;
                align-items:center;
                position:relative;
                font-weight:${props=>props.theme.weight};
                &:first-child{
                    margin-left: 0px;
                }
                &:after{
                    content:'';
                    transition:all 0.2s ease;
                    height:2px;
                    width:0%;
                    position:absolute;
                    bottom:0;
                    left:0;
                    background-color:${props=>props.theme.mainColor3};
                    z-index:2;
                }
                &:hover{
                    &:after{
                        width:100%;
                    }
                    // border-bottom:1px solid green;
                }
            }
        }
        
        .left_sector{
            height:100%;
            display:flex;
            align-items:center;
            
            .logo_par{
                margin-right: 50px;
                img{
                    width:116px;
                    height:auto;
                    object-fit:contain;
                }
            }
        }
        
    }
    
`