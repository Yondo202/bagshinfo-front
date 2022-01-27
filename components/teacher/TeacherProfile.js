import React from 'react'
import styled from 'styled-components'
import { TitleStyle, MainButtonStyle } from "@/miscs/CustomStyle"

const TeacherProfile = () => {
    return (
        <Container>
            <div className="head_image">
                <img src="/img/top_background.svg" />
            </div>

            <div className="container">
                <div className="profile_body">
                    <div className="image_sector">
                        <img src="https://uploads.toptal.io/user/photo/224838/large_2ec1783c3a0a8182d2e3ad651582a9eb.jpg" alt="bagshinfo" />
                    </div>
                    <div className="text_body">
                        <div className="top">
                            <div className="name_title">Danielle Thompson</div>
                            <div className="sm_desc">Физик хими - ийн багш  огноо: 20222-01-05</div>
                            <div className="long_desc">Сонгинохайрхан дүүргийн 26 дугаар хорооны Мандал-Овоо 31-р гудамжны Их нарантай холбогдсон авто замын гүүрний ар, урд хэсэгт хөрсний ус ихээр гарч ойр орчмын өрхүүдийн хашаа руу ус орох зэрэг хүндрэлтэй асуудлууд үүсжээ.
                                Иймд Сонгинохайрхан дүүргийн ЗДТГ болон Геодез усны барилга байгууламжийн газар ОНӨААТҮГ, дүүргийн Онцгой байдлын хэлтсийн албан хаагчид хамтран тус хэсэгт энэ сарын 21-23-ны өдрүүдэд ажилласан байна..</div>
                        </div>

                        <div className="bottom">
                            <div className="button_class">Хими</div>
                            <div className="button_class">Биологи</div>
                        </div>
                        
                    </div>

                    
                </div>
                <div className="hire_teach">
                    <div className="texts">Danielle одоо ажиллах боломжтой</div>
                    <MainButtonStyle className="custom">Санал тавих</MainButtonStyle>
                </div>
            </div>
            

        </Container>
    )
}
// opacityBackground
export default TeacherProfile


const Container = styled.div`
    ${({theme})=>`
        font-size:${theme.fontSize3};
        .hire_teach{
            padding:20px 30px;
            background-color:${theme.opacityBackground};
            display:flex;
            align-items:center;
            justify-content:center;
            gap:20px;
            .custom{
                font-size:16px;
                font-weight:${theme.weight};
                padding:10px 30px;
            }
            .texts{
                position:relative;
                font-weight:${theme.weight};
                color:${theme.textColor2};
                &:after{
                    content:'';
                    position:absolute;
                    left:-15px;
                    top:35%;
                    width:7px;
                    height:7px;
                    border-radius:50%;
                    background-color:${theme.mainColor2};
                    
                }
            }
        }
        .profile_body{
            background-color:${theme.body};
            margin-top:9rem;
            padding:1.8rem;
            display:flex;
            justify-content:space-between;
            gap:30px;;
            .text_body{
                height:auto;
                padding-right:20px;
                width:70%;
                display:flex;
                flex-direction:column;
                align-items:space-between;
                justify-content:space-between;
                .bottom{
                    display:flex;
                    flex-wrap:wrap;
                    gap:15px;
                    .button_class{
                        cursor:pointer;
                        padding:2px 25px;
                        border:1px solid rgba(0,0,0,0.2);
                        font-weight:${theme.weight2};
                        border-radius:50px;
                        color:#495469;
                        // #495469
                        &:hover{
                            color:${theme.textColor3};
                            background-color:rgba(32,78,207,.16);
                        }
                    }
                }
                .top{
                    margin-bottom:30px;
                    .name_title{
                        margin-bottom:6px;
                        font-size:25px;
                    }
                    .sm_desc{
                        color:${theme.textColor4};
                        font-size:${theme.fontSize3};
                        font-weight:${theme.weight};
                        margin-bottom:17px;
                    }
                    .long_desc{
                        color:${theme.textColor};
                        font-weight:${theme.weight};
                    }
                }
                
            }
           
            .image_sector{
                width:30%;
                img{
                    width:100%;
                    height:auto;
                    object-fit:cover;
                }
            }
        }
    `}
   
    .head_image{
        position:absolute;
        z-index:-1;
        width:100%;
        height:270px;
        top:0;
        left:0;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
`