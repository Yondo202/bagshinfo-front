import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import {  MainButtonStyle } from "@/miscs/CustomStyle"
import Slider from '@/components/Slider'
import { FaChalkboardTeacher } from "react-icons/fa"


const Hometop = () => {
    const [ profile, setProfile ] = useState({});
    const [ card, setCard ] = useState(true);

    useEffect(()=>{
        setProfile(Data[0])
    },[])
    useEffect(()=>{
        setCard(!card)
    },[profile])

    return (
        <>
            <Container  card={card}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="text_par">
                                <div className="title">Хөдөлмөрийн хөлсийг нь үнэлэх боломжгүй цорын ганц мэргэжил бол багш юм. </div>
                                <div className="description">Бид туршлагатай чадварлаг багш нарыг сурталчилж багш мэргэжлийн үнэлэмжийг нийгэмд өсгөх, мэдээ мэдээлэл, зөвлөгөө зөвлөмж, бүтээл туурвилаараа дамжуулан багш нар хоорондоо мэдээлэл солилцох, туршлага судлах, сургалтын байгууллагууд, эцэг эх, сурагч оюутан нарт туршлагатай багш нартай холбогдож мэдлэг эзэмшихэд нь туслах гүүр нь болох юм. </div>
                            
                                <MainButtonStyle className="custom" type="button">Бүгдийг Харах</MainButtonStyle>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                            <div className="user_profile">
                                <div className="user_image">
                                    <img src={profile?.image} alt="user" />
                                </div>
                                <div className={`card_parent`}>
                                    <div className="map_image" >
                                        <div className="detect" />
                                    </div>
                                    <div className="name">{profile.name??`Баатар Цогтсайхан`}</div>
                                    <div className="desc"><FaChalkboardTeacher /> expert teacher</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                
            </Container>
            <Slider data={Data} profile={profile} setProfile={setProfile} />
        </>
    )
}



export default Hometop


const animate = keyframes`
    0% { transform:scale(1); box-shadow: 0 0 1.4px 1.4px #204ecf; }
    100% { transform:scale(3); box-shadow: 0 0 0px 0px #204ecf; }
`
const animate2 = keyframes`
    0% {  transform: rotate3d(0, 1, 0, 90deg) translateX(-110px); }
    100% {  transform: rotate3d(0, 1, 0, 0deg) translateX(0px); }
`
const animate3 = keyframes`
    0% {  transform: rotate3d(0, 1, 0, 90deg) translateX(-100px); }
    100% {  transform: rotate3d(0, 1, 0, 0deg) translateX(0px); }
`

const Container = styled.div`
    height:360px;
    width:100%;
    background-color:${props=>props.theme.background};
    padding-top:18px;
    position:relative;
    margin-bottom:30px;
    .row{
        height:100%;
    }
    .container{
        height:100%;
    }
    &:after{
        content:'';
        position:absolute;
        z-index:1;
        bottom:0;
        right:0;
        left:0;
        height: 100px;
        background-image: linear-gradient( 180deg ,hsla(0,0%,83.5%,0),#d2d6e2 90%);
    }
    .text_par{
        padding-right:60px;
        padding-bottom:60px;
        position:relative;
        z-index:2;
        .title{
            color:${props=>props.theme.textColor};
            font-size:20px;
            margin-bottom:20px;
            font-weight:${props=>props.theme.weight};
        }
        .description{
            color:${props=>props.theme.textColor2};
            font-size:${props=>props.theme.fontSize};
            margin-bottom:35px;
            font-weight:300;
        }
        .custom{
            font-size:16px;
            font-weight:${props=>props.theme.weight};
            padding:10px 60px;
        }
    }
    .user_profile{
        width:100%;
        height:100%;
        position:relative;
        .user_image{
            width:110%;
            display:flex;
            position:absolute;
            left:-170px;
            bottom:0;
            top:0;
            z-index:1;
            img{
                width:100%;
                height:auto;
                object-fit:cover;
            }
        }
        .card_parent{
            position:absolute;
            top:10%;
            right:0;
            width:220px;
            z-index:2;
            background-color:#fff;
            padding:10px 14px;
            cursor:pointer;
            animation:${props=>props.card?animate3: animate2} 0.7s ease;
            .map_image{
                width:100%;
                height:100px;
                background-color:#d2d6e2;
                background-image:url('/img/map.jpg');
                background-position:center;
                background-repeat: no-repeat
                background-size: 100%;
                background-size: 100% 100%;
                background-blend-mode: lighten;
                position:relative;

                .detect{
                    position:absolute;
                    height:7px;
                    width:7px;
                    border-radius:50%;
                    right:40px;
                    top:39%;
                    background-color:${props=>props.theme.textColor3};
                }

                &:after{
                    content:'';
                    position:absolute;
                    height:7px;
                    width:7px;
                    border-radius:50%;
                    right:40px;
                    top:39%;
                    animation:${animate} 1.1s ease infinite;
                    // box-shadow: 0 0 1px 1px #204ecf;
                    // transform:scale(2);
                }
            }
            .name{
                color:${({theme})=>theme.textColor3};
                font-weight:${props=>props.theme.weight};
                margin-bottom:4px;
                margin-top:4px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width:100%;
            }
            .desc{
                color:${props=>props.theme.textColor4};
                font-size:${props=>props.theme.fontSize};
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width:100%;
                svg{
                    color:${props=>props.theme.textColor3};
                    font-size:16px;
                    margin-right:6px;
                }
            }
        }
       
    }

    // background-color:#d2d6e2;
    // background-image:url('/img/map.jpg');
    // background-position:center;
    // background-repeat: no-repeat
    // background-size: 100%;
    // background-blend-mode: lighten;
`

const Data = [
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157820/hero_section_big-9ecc8e2425167d419cffb4d58d5d53d6.jpg',
    name:'Бурмаа Дулам', teaching:'Биологи'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/531040/hero_section_big-f904a9c7f6db9d9c08d3b07b48c28657.jpg',
    name:'Баасан Сүрнэн', teaching:'Монгол хэл'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/561240/hero_section_big-76c0dd55bb9b2a358a888be81862c581.jpg',
    name:'Цогтбаатар Төмөр1', teaching:'Газар зүй'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/403442/hero_section_big-6d9ee014ab1d4e045279e2826ba931d7.jpg',
    name:'Баатарсайхан Цогт', teaching:'Хими'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57719/hero_section_big-5e89047395ced2d3ad47620e4990a105.jpg',
    name:'Бурмаа Дулам1', teaching:'Биологи'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57684/hero_section_big-ea145bd38bdb9fcac9620124e6998500.jpg',
    name:'Баасан Сүрнэн1', teaching:'Монгол хэл'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157792/hero_section_big-e1870f5aedb956f07ae10d5681566e6f.jpg',
    name:'Цогтбаатар Төмөр2', teaching:'Газар зүй'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/537780/hero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg',
    name:'Баатарсайхан Цогт1', teaching:'Хими'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157767/hero_section_big-8880fc976763dc20d9ecc2784e509394.jpg',
    name:'Бурмаа Дулам2', teaching:'Биологи'  },
    { image:'https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/588102/Hero_section_big_800x600_EmilyDubow-1e5b5063ef7d4e5120433d2a8bd6fba0.jpg',
    name:'Баасан Сүрнэн2', teaching:'Монгол хэл'  },
]