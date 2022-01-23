import React, { useEffect, useState  } from 'react'
import styled from 'styled-components'
import {  MainButtonStyle } from "@/miscs/CustomStyle"
import Link from "next/link"

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }
    useEffect(() => {
        function watchScroll() {
        window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
        window.removeEventListener("scroll", logit);
        };
    }, []);


    return (
        <Parent >
            <Ghost />
            <Container className={scrollY > 0? `fixed`:``} >
                <div className="top_menus container">
                    <div className="left_sector ">
                        <Link href="/">
                            <a>
                                <div className="logo_par">
                                    <img src="https://www.toptal.com/toptal-logo.png" alt="bagshinfo_logo" />
                                </div>
                            </a>
                        </Link>
                        
                        <div className="menu_par">
                            <div className="menus">Багш</div>
                            <div className="menus">Сурах бичиг</div>
                        </div>
                    </div>

                    <div className="left_sector">
                        <div className="menu_par">
                            <Link href="/auth/user/login">
                                <a>
                                    <MainButtonStyle type="button">Нэвтрэх</MainButtonStyle>
                                </a>
                            </Link>
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
    .fixed{
        position:fixed;
        z-index:3;
        background-color:${props=>props.theme.body};
        box-shadow:0 1px 8px -4px;
    }
`

const Ghost = styled.div`
    height: 72px;
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
                    background-color:${props=>props.theme.textColor3};
                    z-index:2;
                }
                &:hover{
                    &:after{
                        width:100%;
                    }
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