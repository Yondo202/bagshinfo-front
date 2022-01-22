import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa"
import styled from 'styled-components'
import { TitleStyle, MainButtonStyle } from "@/miscs/CustomStyle"

const Categorycards = () => {
    return (
        <Container className="container">
            <TitleStyle>Meet Talent in Our Network</TitleStyle>

            <div className="main_content">
                <div className="header_menu">
                    <div className="menu_text"> Гэрээр заах</div>
                    <div className="menu_text"> Сургалтын төвтэй</div>
                    <div className="menu_text"> Өөрийн туршлагаар</div>
                    <div className="menu_text"> Боловсролын байгууллага</div>
                </div>

                <div className="profiles_content">
                    {Data.map((el,ind)=>{
                        return(
                            <div key={ind} className="profile_cards">
                                <div className="image_par">
                                    <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157721/talent_tabs_section-c9578280809b65cb349f26fac0b89dd6.jpg" alt="bagshinfo" />
                                </div>
                               <div className="text_container">
                                <div className="title">Бааатар Цогтсайхан</div>
                                    <div className="desc">
                                        <FaChalkboardTeacher /> JavaScript Developer
                                    </div>
                                    <div className="description">Gabriel is a highly efficient and reliable professional who possesses a broad skill set for web application development. He's been working on a range of products and clients—from working on scalability problems in production engineering teams at Shopify and Autodesk to launching new applications for startups. Most of his work consists of leading technical teams, by creating an easy development environment, fixing technical debts, providing best practices code examples, and mentoring devs. </div>
                               </div>
                               <MainButtonStyle className="custom">Бүтэн мэдээллийг харах</MainButtonStyle>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </Container>
    )
}

export default Categorycards

const Data = [
    { text:1 },
    { text:2 },
    { text:3 }
]

const Container = styled.div`
    ${({theme})=>`
    margin-bottom:80px;
    margin-top:80px;
    .main_content{
        .profiles_content{
            display:flex;
            justify-content:space-between;
            // gap:12px;
            .profile_cards{
                height:100%;
                width:32%;
                .custom{
                    width:100%;
                    padding:10px 0px;
                    border-radius:0;
                }
                .image_par{
                    position:relative;
                    cursor:pointer;
                    width: 100%;
                    height: 258px;
                    clip-path: polygon(0 0,calc(100% + 1px) 0,calc(100% + 1px) 100%,24px 100%,0 calc(100% - 24px));
                    img{
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    }
                    &:after{
                        content:'Бүтэн мэдээллийг харах';
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-weight:${theme.weight2};
                        font-size:${theme.fontSize2};
                        color:#fff;
                        background-color:rgba(15,37,110,0.75);
                        opacity:0;
                        transition:all 0.2s ease;

                    }
                    &:hover{
                        &:after{
                            opacity:1;
                        }
                    }
                }
                .text_container{
                    padding:24px;
                    .title{
                        font-size:${theme.fontSize2};
                        margin-bottom:5px;
                        color:${theme.textColor3};
                        font-weight:${theme.weight};
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        width:100%;
                    }
                    .desc{
                        color:${theme.textColor4};
                        font-size:${theme.fontSize};
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        width:100%;
                        svg{
                            font-size:16px;
                            margin-right:6px;
                        }
                    }
                    .description{
                        margin-top:14px;
                        color:${theme.textColor2};
                        font-weight:${theme.weight};
                    }
                }
            }
        }
        .header_menu{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:38px;
            .menu_text{
                cursor:pointer;
                color: ${theme.textColor4};
                font-size:18px;
                font-weight: 600;
                margin: 0 15px;
                padding-bottom: 13px;

            }
            .active{
                color: ${theme.textColor};
                border-bottom: 2px solid ${theme.textColor3};
            }
        }
    }
    `}
`