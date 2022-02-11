import React, { useEffect, useState  } from 'react'
import styled from 'styled-components'
import {  MainButtonStyle } from "@/miscs/CustomStyle"
import { parseCookies } from "nookies";
import Link from "next/link"

const Header = () => {
    const { username } = parseCookies();
    const [scrollY, setScrollY] = useState(0);
    const [ name, setName ] = useState('')
    
    useEffect(()=>{
        if(username){
            setName(username)
        }
    },[])

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
                                    <img src="/img/logo_main.png" alt="bagshinfo_logo" />
                                </div>
                            </a>
                        </Link>
                        
                        <div className="menu_par">
                            <div className="menus">Багш</div>
                            <div className="menus">Сурах бичиг</div>
                        </div>
                    </div>


                    {name !== ''
                        ?<div className="left_sector">
                            <div className="profile_icon">{name?.slice(0,1)}</div>
                        </div>
                        :
                        <div className="left_sector">
                            <div className="menu_par">
                                <Link href="/auth/user/login">
                                    <a>
                                        <MainButtonStyle type="button">Нэвтрэх</MainButtonStyle>
                                    </a>
                                </Link>
                                <Link href="/auth/tech/signup">
                                    <a className="menus">Багшаар бүртгүүлэх</a>
                                </Link>
                                
                            </div>
                        </div>
                    }

                    
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
                    width:90px;
                    height:auto;
                    object-fit:contain;
                }
            }
            .profile_icon{
                background-color:#fff;
                width:35px;
                height:35px;
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:50%;
                font-weight:bold;
                font-size:20px;
                color:${props=>props.theme.textColor3};
                cursor:pointer;
                padding-bottom:4px;
                position:relative;
                &:after{
                    content:'';
                    position:absolute;
                    bottom:1px;
                    right:2px;
                    background-color:${props=>props.theme.mainColor2};
                    height:7px;
                    width:7px;
                    border-radius:50%;
                }
            }
        }
        
    }
    
`