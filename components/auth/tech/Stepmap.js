import React, { useState } from 'react'
import Maps from '@/miscs/Maps';
import axios from "@/global/axiosbase";
import {  MainButtonStyle } from "@/miscs/CustomStyle";
import { BsArrowRight } from "react-icons/bs"
import styled, { keyframes } from 'styled-components';


const Stepmap = () => {
    const mapRef = React.useRef()
    const [ resultLoc, setResultLoc ] = useState([])
    const [ selectMap, setSelectMap ] = useState({})
    
    const [ showMap, setShowMap ] = useState(false);
    const [ cName, setCname ] = useState(false);

    const SearchHandle = async e =>{
        console.log('e.target.name', e.target.name);
        console.log('e.target.name', e.target.value);
        let result = await axios.get(`https://lhc8fpj94l.execute-api.ap-southeast-1.amazonaws.com/prod/searchaddr?district=&address=${e.target.value}`)
        if(result.data !== "error"){
            setResultLoc(result.data)
        }else{
            setResultLoc([])
        }
        console.log('result', result);
    }

    const SelectHandle = (el) =>{
        setSelectMap(el)
    }

    const mapCloseHandle = (e) =>{
        if(e.target === mapRef.current){
            setCname(true)
            setTimeout(() => {setShowMap(false), setCname(false)}, 380)
        }
    }

    return (
        <>
            
            <StepMapStyle className="inputs_body">

                {/* <div className="custom_row"> */}

                    <div className="input_par">
                        <div className="label">Байршил хайх</div>
                        <input placeholder="хайх..." onChange={SearchHandle} className="my_inp" type="text" />

                        {resultLoc.length ? <div className='result_par'>
                                { resultLoc.map((el,ind)=>{
                                    return(
                                        <div onClick={_=>SelectHandle(el)} key={ind}>{el.full_address}</div>
                                    )
                                }) }
                            </div>
                        : null}
                    </div>
                    {/* <div className="input_par">
                        <div className="label">Газрын зураг дээр сонгох</div>
                        
                    </div> */}
                    <div className="or_line">
                        <span className="orr">эсвэл</span>
                    </div>

                    <div onClick={_=>setShowMap(true)} className="gmail_botton">
                        <img src="/img/maps_icon.svg" alt='bagshinfo' />
                        <span>Газрын зураг дээр сонгох - ээр нэвтрэх</span>
                    </div>

                {/* </div> */}

                <MainButtonStyle className="custom">Хадгалах <BsArrowRight /></MainButtonStyle>
            </StepMapStyle>

            {showMap && <FullModalStyle cName={cName} ref={mapRef} onClick={mapCloseHandle} >
                
                <div className="content">
                    <div className="header">
                        <MainButtonStyle className="custom2">Хаах </MainButtonStyle>                        
                        <MainButtonStyle className="custom2">Хадгалах </MainButtonStyle>                        
                    </div>
                    <Maps />
                </div>
            </FullModalStyle>}
        </>
    )
}

export default Stepmap

const animate = keyframes`
    0%{ height:0%; opacity:0; }
    100%{ height:80%; opacity:1; }
`
const animate2 = keyframes`
    0%{ height:80%;}
    100%{ height:0%; }
`

const FullModalStyle = styled.div`
    position:fixed;
    top:0px;
    left:0;
    z-index:9999;
    background-color:rgba(0,0,0,0.5);
    width:100vw;
    height:100vh;
    display:flex;
    align-items:end;
    .content{
        animation:${props=>props.cName?animate2:animate} 0.4s ease;
        height:84%;
        width:100%;
        .header{
            display:flex;
            justify-content:space-between;
            padding:0px 12px;
            .custom2{
                font-size:16px;
                width:16%;
                padding:10px 0px;
                @media (max-width:768px){
                    width:40%;
                }
            }
        }
    }
`
const StepMapStyle = styled.div`
    .custom{
        margin-top:40px !important;
    }
    
    .input_par{
        margin-bottom:0px !important;
        .my_inp{
            margin-bottom:0px !important;
        }
        .result_par{
            position:absolute;
            top:110%;
            left:0;
            width:100%;
            z-index:3;
            border:1px solid #000;
            padding:10px 10px;
            background-color:#fff;
        }
    }
    .or_line{
        text-align:center;
        padding:22px 0px;
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
`