import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from "next/link"
import {  MainButtonStyle } from "@/miscs/CustomStyle"
import { useForm } from "react-hook-form"
import { DatePicker, Select, Input, InputNumber, Upload, Tooltip } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "@/global/axiosbase"

// const initial = 

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('2MB өндөр хэмжээтэй байна');
    }
    return isJpgOrPng && isLt2M;
}

const Signup = () => {
    const [ lessons, setLessons ] = useState([])
    const [ imageLoad ] = useState(false);
    const [ imageUrl, setImageUrl ] = useState('');

    useEffect(()=>{
        void async function fetch(){
        //    let less =  await axios.get(`lessons`)
        //    console.log(`less`, less)
        }()
    },[])

    const { register, handleSubmit, formState: { errors }, clearErrors, reset, setValue, trigger, watch } = useForm({
        defaultValues: {
            // email: null,
            // password: null,
        }
    });
    const state = watch()

    const uploadButton = (
        <div>
          {imageLoad ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Хавсаргах</div>
        </div>
    );

    console.log(`state`, state)

    const onChangeHandle = (name, value) =>{

    }

  return( 
    <Container className="container">
        <Link href="/">
            <a>
                <div className="logo_par">
                    <img src="https://www.toptal.com/toptal-logo.png" alt="bagshinfo_logo" />
                </div>
            </a>
        </Link>
        

        <div className="bodys">

            <div className="main_content">
                <div className="title">Бүртгүүлэх</div>

                <div className="inputs_body">
                    <div className="input_par">
                        <div className="label">Овог <span className="required">*</span></div>
                        <Input
                            size="large"
                            placeholder=""
                        />
                    </div>
                    <div className="input_par">
                        <div className="label">Нэр <span className="required">*</span></div>
                        <Input
                            size="large"
                        />
                    </div>

                    <div className="input_par">
                        <div className="label">Email - хаяг <span className="required">*</span></div>
                        <Tooltip
                            trigger={['focus']}
                            title={'Цаашид email - ээр нэвтрэнэ'}
                            placement="bottomLeft"
                            // overlayClassName="numeric-input"
                        >
                            <Input
                                size="large"
                            />
                        </Tooltip>
                        
                    </div>
                
                    <div className="input_par">
                        <div className="label">Утасны дугаар <span className="required">*</span></div>
                        <InputNumber
                            size="large"
                        />
                    </div>

                    <div className="input_par">
                        <div className="label">Заах хичээл <span className="required">*</span></div>
                        <Input
                            size="large"
                        />
                    </div>
                    <div className="input_par">
                        <div className="label">Нүүр зураг <span className="required">*</span></div>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            beforeUpload={beforeUpload}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </div>
                </div>
                
                <MainButtonStyle className="custom">Бүртгүүлэх</MainButtonStyle>

            </div>

        </div>
    </Container>
  )
};

export default Signup;


const Container = styled.div`
    .bodys{
        width:100%;
        display:flex;
        justify-content:center;
        .main_content{
            max-width: 400px;
            width: 100%;
            @media (max-width:768px){
                width: 100%;
            }
            .input_par{
                margin-bottom:22px;
                .label{
                    color:${props=>props.theme.textColor2};
                    font-size:${props=>props.theme.fontSize};
                    font-weight:${props=>props.theme.weight};
                    margin-bottom:6px;
                    .required{
                        color:#eb2329;
                    }
                }
                .ant-input{
                    font-size: ${props=>props.theme.fontSize};
                    color:${props=>props.theme.textColorBlack};
                    font-weight:${props=>props.theme.weight};
                }
                .ant-input-lg{
                    padding-bottom: 8px;
                }
               
                .ant-input-number{
                    width:100%;
                    .ant-input-number-handler-wrap{
                        display:none;
                    }
                }

            }
          
            .title{
                font-size:28px;
                color:${props=>props.theme.textColor};
                margin-bottom:30px;
                font-weight:${props=>props.theme.weight};
            }
            .custom{
                width:100%;
                padding:14px 0px;
                margin:18px 0px;
            }
        }
    }
    .logo_par{
        cursor:pointer;
        padding:15px 0px;
        img{
            width:116px;
            height:auto;
            object-fit:contain;
        }
    }
`