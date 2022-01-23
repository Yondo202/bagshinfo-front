import React, { useRef } from 'react'
import styled from 'styled-components'
import { FaChalkboardTeacher } from "react-icons/fa"

const ProfileCard = ({ data, clickHandle, profile}) => {
    const custom = useRef()


    return (
        <CardStyle onClick={_=>clickHandle(data, custom)} ref={custom} className={`custom ${profile.name === data.name?`active`:``}`} >
            <div className="image_cont">
                <img src={data.image} alt="bagshin-info" />
            </div>
            <div className="text_sector">
                <div className="title">{data.name}</div>
                <div className="desc">
                    <FaChalkboardTeacher /> {data.teaching}
                </div>
            </div>
        </CardStyle>
    )
}

export default ProfileCard


const CardStyle = styled.div`
    ${({theme, className})=>`
        cursor:pointer;
        font-weight: 400;
        width: 170px;
        min-width:170px;
        background: #fff;
        transition:all 0.25s ease;
        .text_sector{
            padding:9px 13px 4px;
            .title{
                margin-bottom:0px;
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
                    color:${theme.textColor3};
                    font-size:16px;
                    margin-right:6px;
                }
            }
        }
        .image_cont{
            width:100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            overflow: hidden;
            background: #d2d6e2;
            clip-path: polygon(0 0,calc(100% + 1px) 0,calc(100% + 1px) 100%,24px 100%,0 calc(100% - 24px));
            img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }
    `}
`