import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from "next/link"
import {  MainButtonStyle } from "@/miscs/CustomStyle"
import { useForm } from "react-hook-form"
import { EyeInvisibleOutlined, EyeTwoTone, UnlockOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Select, Input, InputNumber, Upload, Tooltip, notification } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "@/global/axiosbase"
import { async } from 'regenerator-runtime';
import AlertMessage from '@/miscs/AlertMessage';
const { Option } = Select

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
            try{
                let less =  await axios.get(`lessons`)
                setLessons(less?.data?.data)
            }catch(err){
                console.log(`err`, err)
            }
            
        }()
    },[])

    const { register, handleSubmit, formState: { errors }, clearErrors, reset, setValue, trigger, watch, setError } = useForm({
        defaultValues: {
            last_name: null, // овог
            first_name: null,
            email: null,
            phone: null,
            lessons:[],
            password:null,
            password_again: null,
        }
    });

    const state = watch()

    const uploadButton = (
        <div>
          {imageLoad ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Хавсаргах</div>
        </div>
    );

    const onSubmit = data => {

        console.log(`data`, data)

        if(state.password_again !== state.password){
            setError('password_again', { message: "Нууц үг адил биш байна", })
        }else{

            axios.post(`auth/local/register`, data).then(res=>{
                console.log(`res`, res)
            }).catch(err=>{
                console.log(`err?.response?`, err?.response)

                
                if ( err?.response?.data?.error?.message === "Email is already taken" ){
                    setError('email', { message: "Email хаяг давхцаж байна", })
                    AlertMessage(`Email хаяг давхцаж байна`, 'warning')
                }
                if( err?.response?.data?.error?.message === "Email already taken"){
                    setError('phone', { message: "Утасны дугаар давхцаж байна", })
                    AlertMessage(`Утасны дугаар давхцаж байна`, 'warning')
                }
            })

        }
        
    };

    const onChangeHandle = (name, value, addition) =>{
        console.log(`value`, value)
        console.log(`name`, name)
        setValue(name, name==="phone"? parseInt(value) :value)
        clearErrors()
    }


    const openNotification = () => {
        notification.success({
        message: `Амжилттай бүртгэгдлээ`,
        // description: 'This is the content of the',
        placement:'topRight',
        duration:3,
        });
    };

  return( 
    <Container className="container">
        <div className="header">
            <Link href="/">
                <a>
                    <div className="logo_par">
                        <img src="https://www.toptal.com/toptal-logo.png" alt="bagshinfo_logo" />
                    </div>
                </a>
            </Link>
        </div>
       

        <div className="bodys">

            <form className="main_content" onSubmit={handleSubmit(onSubmit)}>
                <div onClick={() => openNotification('topRight')} className="title">Бүртгүүлэх</div>

                <div className="inputs_body">
                    <div className="input_par">
                        <div className="label">Овог <span className="required">*</span></div>
                        <Input
                            { ...register('last_name', { required: 'Овог оо оруулна уу' }) }
                            className={errors.last_name?.message?`err_style`:``}
                            value={state.last_name}
                            size="large"
                            onChange={el => onChangeHandle(el.target.name, el.target.value)}
                        />
                        {errors.last_name?.message&&<span className="err_text">{errors.last_name?.message}</span>}
                    </div>
                    <div className="input_par">
                        <div className="label">Нэр <span className="required">*</span></div>
                        <Input
                            { ...register('first_name', { required: 'Нэр ээ оруулна уу' }) }
                            className={errors.first_name?.message?`err_style`:``}
                            value={state.first_name}
                            size="large"
                            onChange={el => onChangeHandle(el.target.name, el.target.value)}
                        />
                        {errors.first_name?.message&&<span className="err_text">{errors.first_name?.message}</span>}
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
                                { ...register('email', { required: 'Email ээ оруулна уу' }) }
                                className={errors.email?.message?`err_style`:``}
                                value={state.email}
                                size="large"
                                onChange={el => onChangeHandle(el.target.name, el.target.value)}
                            />
                        </Tooltip>
                        {errors.email?.message&&<span className="err_text">{errors.email?.message}</span>}
                    </div>
                
                    <div className="input_par">
                        <div className="label">Утасны дугаар <span className="required">*</span></div>
                        <Input
                            type="number"
                            { ...register('phone', { required: 'Утасны дугаараа оруулна уу' }) }
                            className={errors.phone?.message?`err_style`:``}
                            value={state.phone}
                            size="large"
                            onChange={value => onChangeHandle('phone', parseInt(value.target.value))}
                        />
                        {errors.phone?.message&&<span className="err_text">{errors.phone?.message}</span>}
                    </div>

                    <div className="input_par">
                        <div className="label">Заах хичээл <span className="required">*</span></div>
                        <Select
                            { ...register('lessons', { required: '1 буюу түүнээс дээш хичээл сонгоно уу' }) }
                            className={errors.lessons?.message?`err_style`:``}
                            value={state.lessons}

                            size="large"
                            mode="multiple"
                            placeholder="- Сонго -"
                            onChange={(value, option) => { onChangeHandle( 'lessons', value, 'many' ) }}
                        >
                            {lessons.map((el,ind)=>{
                                return(
                                    <Option value={el.id} name="lessons" key={ind}>
                                        {el.attributes.name}
                                    </Option>
                                )
                            })}
                        </Select>
                        {errors.lesson?.message&&<span className="err_text">{errors.lesson?.message}</span>}
                    </div>

                    <div className="input_par">
                        <div className="label">Нууц үг <span className="required">*</span></div>
                        <Input.Password 
                            {...register("password", { required: 'Нууц үгээ оруулна уу' })}
                            onChange={el => onChangeHandle(el.target.name, el.target.value)}
                            className={errors.password ? `err_style` : ``}
                            size="large"
                            prefix={<UnlockOutlined />} 
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        {errors.password?.message&&<span className="err_text">{errors.password?.message}</span>}
                    </div>

                    <div className="input_par">
                        <div className="label">Нууц үг давтах <span className="required">*</span></div>
                        <Input.Password 
                            {...register("password_again", { required: 'Нууц үг ээ давтаж оруулна уу' })}
                            onChange={el => onChangeHandle(el.target.name, el.target.value)}
                            className={errors.password_again ? `err_style` : ``}
                            size="large"
                            prefix={<UnlockOutlined />} 
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        {errors.password_again?.message&&<span className="err_text">{errors.password_again?.message}</span>}
                    </div>

                    {/* <div className="input_par">
                        <div className="label">Нүүр зураг <span className="required">*</span></div>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            beforeUpload={beforeUpload}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </div> */}
                </div>
                
                <MainButtonStyle className="custom">Бүртгүүлэх</MainButtonStyle>
            </form>

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
                width:100%;
                margin-bottom:24px;
                position:relative;
                .err_text{
                    position:absolute;
                    top:105%;
                    right:0;
                    font-size:11px;
                    color:red;
                    font-weight:${props=>props.theme.weight};
                }
                .label{
                    color:${props=>props.theme.textColor2};
                    font-size:${props=>props.theme.fontSize};
                    font-weight:${props=>props.theme.weight};
                    margin-bottom:6px;
                    .required{
                        color:#eb2329;
                    }
                }
                .ant-input-password{
                    .ant-input-prefix{
                        svg{
                            color:rgba(0, 0, 0, 0.45);
                        }
                        margin-right: 10px;
                    }
                    .ant-input{
                        padding-bottom:0;
                    }
                }
                
                .ant-select{
                    font-size: ${props=>props.theme.fontSize};
                    color:${props=>props.theme.textColorBlack};
                    font-weight:${props=>props.theme.weight};
                    width:100%;
                    
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
                    .ant-input-number-input-wrap{
                        input{
                            color:${props=>props.theme.textColorBlack};
                            font-weight:${props=>props.theme.weight};
                            font-size: ${props=>props.theme.fontSize};
                        }
                    }

                    .ant-input-number-handler-wrap{
                        display:none;
                    }
                }
                .err_style{
                    border:1px solid #dc3c1e !important;
                    color:#dc3c1e !important;
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
    .header{
        display:flex;
        .logo_par{
            cursor:pointer;
            padding:15px 0px;
            img{
                width:116px;
                height:auto;
                object-fit:contain;
            }
        }
    }
   
    
`