import React, { useEffect, useState } from 'react'
import { FaChalkboardTeacher } from "react-icons/fa"
import styled from 'styled-components'
import { TitleStyle, MainButtonStyle } from "@/miscs/CustomStyle"

const Categorycards = () => {
    const [ active, setActive ] = useState({ name:'Гэрээр заах', data:[] })

    const handleClick = ( el ) =>{
        setActive(el)
    }

    useEffect(()=>{
        setActive(menu[0])
    },[])

    return (
        <Container className="container">
            <TitleStyle>Таньд санал болгох</TitleStyle>

            <div className="main_content">
                <div className="header_menu">
                    {menu.map((el,ind)=>{
                        return(
                            <div key={ind} onClick={_=>handleClick(el)} className={`menu_text ${active.name===el.name?`active`:``}`}>{el.name}</div>
                        )
                    })}
                </div>

                <div className="profiles_content">
                    {active.data.map((el,ind)=>{
                        return(
                            <div key={ind} className="profile_cards">
                                <div className="image_par">
                                    <img src={el.image} alt="bagshinfo" />
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

const menu = [
    {name:'Гэрээр заах', data : [
        { text:1, image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157685/talent_tabs_section-58d8bfa059b6d433ef5a1421276e2ca2.jpg' },
        { text:2, image:"https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157721/talent_tabs_section-c9578280809b65cb349f26fac0b89dd6.jpg" },
        { text:3, image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157724/talent_tabs_section-487b163dc8e24180d3e9b88895fbfcfd.jpg' }
    ]},
    {name:'Сургалтын төвд', data : [
        { text:1, image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/403431/talent_tabs_section-beb14a4c5b5d350eeb62d77704a9dd63.jpg' },
        { text:2, image:"https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157772/talent_tabs_section-222213bbf5fe28c6ba3dddfd51d08994.jpg" },
        { text:3, image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157693/talent_tabs_section-9a2016252f5e887b11b53080a29d9013.jpg' }
    ]},
    {name:'Өөрийн туршлагаар', data : [
        { text:1, image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157811/talent_tabs_section-01185fa434ff86cab7b95023e8778e01.jpg' },
        { text:2, image:"https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157808/talent_tabs_section-1abbdc6a80905c1af9cd320fd43bd7b8.jpg" },
        { text:3, image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157829/talent_tabs_section-f7bca6f6e6854a7cdf278ebe8a9f5f66.jpg' }
    ]},
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
                margin: 0 18px;
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