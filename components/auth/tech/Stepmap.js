import React, { useState } from 'react'
import Router from 'next/router'
import Maps from '@/miscs/Maps';
import axios from "@/global/axiosbase";
import { Modal } from "antd"
import NProgress from 'nprogress';
import {  MainButtonStyle } from "@/miscs/CustomStyle";
import { BsArrowRight, BsChevronDown, BsPinMap } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
// import { parseCookies } from "nookies";
import styled, { keyframes } from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import AlertMessage from '@/miscs/AlertMessage';


const Stepmap = ({ profileId, jwt}) => {
    // const { jwt } = parseCookies();
    const mapRef = React.useRef();
    const [ showModal, setShowModal ] = useState(false)
    const [ resultLoc, setResultLoc ] = useState([])
    const [ searchText, setSearchText ] = useState({ text: '', select: false })
    const [ selectMap, setSelectMap ] = useState({ lat:0, lng: 0, address_name:''})
    
    const [ showMap, setShowMap ] = useState(false);
    const [ cName, setCname ] = useState(false);

    const SearchHandle = async e =>{
        setSearchText({ text: e.target.value, select: false })
        let result = await axios.get(`https://lhc8fpj94l.execute-api.ap-southeast-1.amazonaws.com/prod/searchaddr?district=&address=${e.target.value}`)
        if(result.data !== "error"){
            setResultLoc(result.data)
        }else{
            setResultLoc([])
        }
    }

    const SelectHandle = (el) =>{
        setSelectMap({ lat:el.latitude, lng: el.longitude, address_name:el.full_address });
        setSearchText({ text:el.full_address, select:true });
        setResultLoc([])
    }

    const mapCloseHandle = (e, button) =>{
        // setSelectMap({ lat:0, lng: 0, address_name:''})
        if(e.target === mapRef.current || button){
            setCname(true)
            setTimeout(() => {setShowMap(false), setCname(false)}, 380)
        }
    }

    const sendHandle = () =>{
        console.log("--")
        // setShowModal(true);
        if( searchText.select === false ){
            setShowModal(true);
        }else{
            NProgress.start()
            // setTimeout(() => {
            //     NProgress.done()
            // }, 1000)
            
            axios.put(`/profiles/${profileId}`, { data: selectMap }, { headers: { Authorization: `bearer ${jwt}` } } ).then(_=>{
                NProgress.done()
                AlertMessage(`Хүсэлт амжилттай`, 'success')
                Router.push('/')
            })
        }
    }

    const blurHandle = () =>{
        if(searchText.text === ''){
            setSelectMap({ lat:0, lng: 0, address_name:''})
        }
    }

    const OutsideClick = () =>{
        setResultLoc([])
        if(searchText.select === false){
            if(selectMap.address_name !== ''|| selectMap.address_name !== 'click_map'){
                setSearchText({ text: selectMap.address_name, select: true })
            }else{
                setSearchText({ text: '', select: false })
            }
        }
    }

    return (
        <>
            <StepMapStyle className="inputs_body">

                {/* <div className="custom_row"> */}

                    <div className="input_par">
                        <div className="label">Байршил хайх</div>
                        <input onBlur={blurHandle} placeholder="хайх..." value={searchText.text} onChange={SearchHandle} className="my_inp" type="text" />

                        {resultLoc.length !== 0 ?<OutsideClickHandler
                            onOutsideClick={_=> OutsideClick()}
                        >
                        <div className='result_par'>
                            { resultLoc.map((el,ind)=>{
                                return(
                                    <div key={ind} className="list" onClick={_=>SelectHandle(el)}>
                                        {el.full_address}
                                    </div>
                                )
                            }) }
                        </div>
                        </OutsideClickHandler> 
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
                <div className="final_buttons">
                    <MainButtonStyle type="button" icon="left" color="false" onClick={_=>Router.push('/')} className="custom"><AiOutlineHome /> Алгасах </MainButtonStyle>
                    <MainButtonStyle onClick={sendHandle} className="custom">Хадгалах <BsArrowRight /></MainButtonStyle>
                </div>

            </StepMapStyle>

            {showMap && <FullModalStyle cName={cName} ref={mapRef} onClick={mapCloseHandle} >
                
                <div className="content">
                    <div className="header">
                        <MainButtonStyle onClick={_=>mapCloseHandle(false, true)} color="false" className="custom2">Хаах <BsChevronDown /></MainButtonStyle>                        
                        <MainButtonStyle onClick={sendHandle} icon="left" className="custom2"><BsPinMap /> Байршилыг хадгалах </MainButtonStyle>                        
                    </div>
                    <Maps selectMap={selectMap} setSelectMap={setSelectMap} setSearchText={setSearchText} />
                </div>
            </FullModalStyle>}

            <Modal
                visible={showModal}
                title="Та байршилаа оруулна уу"
                // onOk={this.handleOk}
                onCancel={_=>setShowModal(false)}
                footer={[
                    <ModalButton key="button">
                        <MainButtonStyle onClick={_=>{setShowModal(false), setShowMap(true) }} icon="left" color="false" className="custom2">Газрын зураг дээр тэмдэглэх</MainButtonStyle>
                        <MainButtonStyle onClick={_=>setShowModal(false)} icon="left" className="custom2">Байршлаар хайх</MainButtonStyle>
                    </ModalButton>,
                ]}
                >
            </Modal>
        </>
    )
}

export default Stepmap

const ModalButton = styled.div`
    display:flex;
    justify-content:space-between;
    gap:10px;
`

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
    z-index:100;
    // background-color:rgba(0,0,0,0.5);
    background-color:#515e7b80;
    width:100%;
    height:100vh;
    display:flex;
    align-items:end;
    .content{
        animation:${props=>props.cName?animate2:animate} 0.4s ease;
        height:88%;
        width:100%;
        .header{
            display:flex;
            justify-content:space-between;
            padding:10px 12px;
            .custom2{
                font-size:14px;
                width:300px;
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
            border:1px solid rgba(0,0,0,0.3);
            box-shadow:0px 5px 20px -8px;
            padding:10px 0px;
            background-color:#fff;
            .list{
                cursor:pointer;
                padding:1px 10px;
                &:hover{
                    background-color:rgba(0,0,0,0.1);
                }
            }
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