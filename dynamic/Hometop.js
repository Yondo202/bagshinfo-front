import React, { useState } from 'react'
import styled from 'styled-components'
import {  MainButtonStyle } from "@/miscs/CustomStyle"
import Slider from '@/components/Slider'
import { FaChalkboardTeacher } from "react-icons/fa"


const Hometop = () => {
    const [ profile, setProfile ] = useState({})

    return (
        <>
            <Container>
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
                                    <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157792/hero_section_big-e1870f5aedb956f07ae10d5681566e6f.jpg" alt="user" />
                                </div>
                                <div className="card_parent">
                                    <div className="map_image" />
                                    <div className="name">{profile.name??`Баатар Цогтсайхан`}</div>
                                    <div className="desc"><FaChalkboardTeacher /> expert teacher</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                
            </Container>
            <Slider setProfile={setProfile} />
        </>
    )
}

export default Hometop

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
            font-size:18px;
            font-weight:${props=>props.theme.weight};
            padding:10px 65px;
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
