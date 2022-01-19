import React from 'react'
import styled from 'styled-components'
import {  MainButtonStyle } from "@/miscs/CustomStyle"

const Hometop = () => {
    return (
        <Container>
           <div className="container">
               <div className="row">
                   <div className="col-md-6 col-12">
                       <div className="text_par">
                            <div className="title"> Hire the Top 3% of Freelance Talent® </div>
                            <div className="description">Toptal is an exclusive network of the top freelance software developers, designers, finance experts, product managers, and project managers in the world. Top companies hire Toptal freelancers for their most important projects.</div>
                           
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
                                <div className="name">Leverage World</div>
                                <div className="desc">expert teacher</div>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
        </Container>
    )
}

export default Hometop
// _1UVB9Z86:after {
//     background-image: linear-gradient(
// 180deg
// ,hsla(0,0%,83.5%,0),#d2d6e2 90%);
// }

// @media (min-width: 540px)
// ._1UVB9Z86:after {
//     height: 170px;
// }
// ._1UVB9Z86:after {
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     height: 100px;
//     background-image: linear-gradient(
// 180deg
// ,hsla(0,0%,83.5%,0),#d2d6e2 77%);
//     content: " ";


const Container = styled.div`
    // height:400px;
    width:100%;
    background-color:${props=>props.theme.background};
    padding-top:18px;
    position:relative;
    .row{
        height:100%;
    }
    .container{
        height:100%;
    }
    &:after{
        content:'';
        position:absolute;
        z-index:2;
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
            font-size:36px;
            margin-bottom:20px;
        }
        .description{
            color:${props=>props.theme.textColor2};
            font-size:18px;
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
                color:${({theme})=>theme.mainColor3};
                font-weight:${props=>props.theme.weight}
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
