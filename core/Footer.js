import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram , FaTwitter, FaPhoneAlt} from "react-icons/fa"
import { GrMail } from "react-icons/gr"


const Footer = () => {
    return (
        <Container>
            <div className="container content_parent">

                <div className="col_items">
                    <div className="title">bagsh.info</div>
                    <img src="/img/logo_main.png" alt="bagshinfo_logo" />
                </div>
                <div className="col_items">
                    <div className="title">Меню</div>
                    <div className="text_par">
                        <div className="texts">Багш хайх</div>
                        <div className="texts">Сурах бичиг</div>
                        <div className="texts">Нэвтрэх</div>
                    </div>
                </div>

                <div className="col_items">
                    <div className="title">Бидэнтэй холбогдох</div>
                    <div className="content_sector">
                        <div className="items"> <FaPhoneAlt /> <span>77880224, 30050004</span> </div>
                        <div className="items"> <GrMail /> <span>contact@bagshinfo.mn</span> </div>
                    </div>
                </div>
                <div className="col_items">
                    <div className="title">Social</div>
                    <div className="icon_par">
                        <div className="icon"><FaFacebookF /></div>
                        <div className="icon"><FaInstagram /></div>
                        <div className="icon"><FaTwitter /></div>
                    </div>
                </div>
                
            </div>
            <div className="container final_text">
                © 2022 он. bagsh.info зохиогчийн эрхээр хамгаалагдсан.
            </div>
        </Container>
    )
}

export default Footer


const Container = styled.div`
    ${({theme})=>`
        // background-color:${theme.textColor3};
        background-color:#0f256e;
        color:#fff;
        padding-top:80px;
        .final_text{
            border-top: 1px solid hsla(0,0%,100%,.2);
            margin-top:60px;
            padding-bottom:60px;
            padding-top:17px;
        }
        .content_parent{
            display:flex;
            justify-content:space-between;
            .col_items{
                width:23%;
                img{
                    width:120px;
                }
                .content_sector{
                    .items{
                        margin-bottom:16px;
                        display:flex;
                        align-items:center;
                        cursor:pointer;
                        color:rgba(255,255,255,0.9);
                        &:hover{
                            color:rgba(255,255,255,0.7);
                        }
                        svg{
                            font-size:15px;
                            margin-right:12px;
                        }
                    }
                }
                .icon_par{
                    display:flex;
                    gap:15px;
                    .icon{
                        color:#fff;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: transparent;
                        border: 1px solid hsla(0,0%,100%,.2);
                        transition: all .2s;
                        cursor:pointer;
                        svg{
                            font-size:19px;
                        }
                        &:hover{
                            color:rgba(255,255,255,0.6);
                        }
                    }
                }
                .text_par{
                    .texts{
                        cursor:pointer;
                        margin-bottom:16px;
                        font-size:14px;
                        font-weight:300;
                        color:rgba(255,255,255,0.9);
                        &:hover{
                            color:rgba(255,255,255,0.6);
                        }
                    }
                }
                .title{
                    font-size:15px;
                    font-weight:${theme.weight};
                    padding-bottom: 18px;
                    margin-bottom:18px;
                    white-space: nowrap;
                    border-bottom: 1px solid hsla(0,0%,100%,.2);
                }
            }
        }
    `}
`