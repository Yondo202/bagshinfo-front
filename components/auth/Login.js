import React from 'react';
import styled from 'styled-components';
import Link from "next/link"
import {  MainButtonStyle } from "@/miscs/CustomStyle"

const Login = () => {
  return( 
    <Container className="container">
        <Link href="/">
            <a>
                <div className="logo_par">
                    <img src="https://www.toptal.com/toptal-logo.png" alt="bagshinfo_logo" />
                </div>
            </a>
        </Link>
        

        <div className="bodys">

            <div className="main_content">
                <div className="title">Нэвтрэх</div>

                <input placeholder="Емэйл ээр нэвтэрнэ үү " className="my_inp" />
                <input placeholder="Нууц үг" className="my_inp" />

                <div className="custom_handle"></div>
                <MainButtonStyle className="custom">Нэвтрэх</MainButtonStyle>

                <div className="or_line">
                    <span className="orr">эсвэл</span>
                </div>

                <div className="gmail_botton">
                    <img src="https://assets.toptal.io/assets/front/static/platform/icons/social/google_30739e.svg" alt='bagshinfo' />
                    <span>Емэйл - ээр нэвтрэх</span>
                </div>
            </div>

        </div>
    </Container>
  )
};

export default Login;


const Container = styled.div`
    .bodys{
        width:100%;
        display:flex;
        justify-content:center;
        .main_content{
            // max-width: 600px;
            max-width: 400px;
            width: 100%;
            .gmail_botton{
                display:flex;
                align-items:center;
                justify-content:center;
                border: 1px solid rgba(0,0,0,0.1);
                padding: 16px 20px;
                font-weight:${props=>props.theme.weight};
                cursor:pointer;
                transition:all 0.2s ease;
                img{
                    line-height: 13px;
                    margin-right:15px;
                }
                &:hover{
                    border: 1px solid #c4c6ca;
                }
            }
            .or_line{
                text-align:center;
                padding:30px 0px;
                position:relative;
                .orr{
                    background-color:#fff;
                    z-index:1;
                    position:relative;
                    padding:0px 12px;
                }
                &:after{
                    content:'';
                    position:absolute;
                    height:1px;
                    width:100%;
                    left:0;
                    top:50%;
                    background-color:rgba(0,0,0,0.2);
                }
            }
            .custom{
                width:100%;
                padding:17px 0px;
            }
            .my_inp{
                font-weight:${props=>props.theme.weight};
                border: 1px solid #d8d9dc;
                border-radius: 0;
                background: #fff;
                font-size: 14px;
                color: #455065;
                padding: 20px;
                transition: all .2s;
                width: 100%;
                outline: none;
                -webkit-appearance: none;
                margin-bottom:20px;
                ::placeholder{
                    color:${props=>props.theme.textColor4};
                }
                &:focus{
                    border: 1px solid ${props=>props.theme.textColor3};
                }
            }
            .title{
                font-size:28px;
                color:${props=>props.theme.textColor};
                margin-bottom:30px;
                font-weight:${props=>props.theme.weight};
            }
        }
    }
    .logo_par{
        cursor:pointer;
        padding:15px 0px;
        img{
            width:116px;
            height:auto;
            object-fit:contain;
        }
    }
`