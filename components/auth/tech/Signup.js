import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { setCookie, parseCookies } from "nookies";
import styled from 'styled-components';
import Link from "next/link"
import {  MainButtonStyle } from "@/miscs/CustomStyle"
import { BsArrowRight, BsCardImage } from "react-icons/bs"
// import { IoMdAdd } from "react-icons/io"
import { RiImageAddFill } from "react-icons/ri"
import { useForm } from "react-hook-form"
import { EyeInvisibleOutlined, EyeTwoTone, UnlockOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Select, Input, InputNumber, Upload, Tooltip, notification } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "@/global/axiosbase"
import AlertMessage from '@/miscs/AlertMessage';
const { Option } = Select
import CkEditor from "@/miscs/CKeditor"
import NProgress from 'nprogress';



// const initial = 

const ImageStyle = styled.div`
    svg{
        color:${props=>props.theme.textColor4};
        font-size:30px;
    }
    .custom_svg{
        margin-top:8px;
        font-size:12px;
        color:${props=>props.theme.textColor2};
    }
`

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      AlertMessage(`Зөвхөн зураг хавсаргах боломжтой`, 'warning')
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      AlertMessage(`2MB өндөр хэмжээтэй байна`, 'warning')
    }
    return isJpgOrPng && isLt2M;
}

const Signup = () => {
    const { jwt, user, signup_page  } = parseCookies();
    const [ step, setStep ] = useState(0);
    const [ lessons, setLessons ] = useState([])
    const [ imageLoad, setImageLoad ] = useState(false);
    const [ imageLoad2, setImageLoad2 ] = useState(false);

    const [ userId, setUserId ] = useState({})

    // /api/users/:id   

    useEffect(()=>{
        void async function fetch(){
            try{
                let less =  await axios.get(`/lessons`)
                // let less2 =  await axios.get(`/users-permissions/roles` )
                // console.log('less2', less2);
                setLessons(less?.data?.data)
            }catch(err){
                console.log(`err`, err)
            }
        }()
    },[])

    useEffect(()=>{
        if(signup_page){
            setStep(signup_page)
            setUserId(JSON.parse(user).id)
        }
    },[step])

    console.log('userId', userId);

    const { register, handleSubmit, formState: { errors }, clearErrors, reset, setValue, trigger, watch, setError } = useForm({
        defaultValues: {
            last_name: null, // овог
            first_name: null,
            email: null,
            phone: null,
            lessons:[],
            password:null,
            password_again: null,

            profile_image:null,
            cover_image:null,
            short_presentation:'',
        }
    });

    const state = watch()

    const uploadButton = (
        <ImageStyle>
          {imageLoad ? <LoadingOutlined /> : <RiImageAddFill />}
          {/* <div className="custom_svg">Нүүр зураг</div> */}
        </ImageStyle>
    );
    const uploadButton2 = (
        <ImageStyle>
          {imageLoad2 ? <LoadingOutlined /> : <RiImageAddFill />}
          {/* <div className="custom_svg">Дэвсгэр зураг</div> */}
        </ImageStyle>
    );

    const uploadHandle = (file, name) =>{
        if(name==="profile_image"){
            setImageLoad(true)
        }else if(name==="cover_image"){
            setImageLoad2(true)
        }

        const image = new FormData();
        image.append("files", file.file.originFileObj);
        axios.post(`/upload`, image).then(res=>{
        axios.put(`/users/${userId}`, { [name]: res?.data[0]?.id }, { headers: { Authorization: `bearer ${jwt}` }} ).then(ress=>{
            console.log('ress', ress);
        })

        setValue(name, res?.data[0])
        if(name==="profile_image"){
            setImageLoad(false)
        }else if(name==="cover_image"){
            setImageLoad2(false)
        }

        }).catch(err=>{
            console.log('err', err);
        })
    }

    const onSubmit = data => {
        if(state.password_again !== state.password){
            setError('password_again', { message: "Нууц үг адил биш байна", })
        }else{
            NProgress.start()
            SignFirst(data)
        }
    };


    const onSubmitStep2 = data => {
        NProgress.start()
        axios.put(`/users/${userId}`, { short_presentation: state.short_presentation }, { headers: { Authoorization: `bearer ${jwt}` } }).then(_=>{
            setStep(2)
        })
    };


    const SignFirst = async (data) => {
        try{
            let res = await axios.post(`/auth/local/register`, {...data, role:'teacher', username: `${state.last_name.slice(0,1)}. ${state.first_name}` })
            setCookie( null, 'jwt', res.data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                // encode:'jwt'
            })
            setCookie( null, 'user', JSON.stringify(res.data.user), {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            
            setCookie( null, 'signup_page', 1, {
                maxAge: 1 *  1 * 60 * 60,
                path: '/',
            })

            AlertMessage(`Амжилттай бүртгэгдлээ`, 'success')
            setStep(1)

        }catch(err){
            console.log('err?.response', err);
            if ( err?.response?.data?.error?.message === "Email is already taken" ){
                setError('email', { message: "Email хаяг давхцаж байна", })
                AlertMessage(`Email хаяг давхцаж байна`, 'warning')
                return
            }
            if( err?.response?.data?.error?.message === "Email already taken"){
                setError('phone', { message: "Утасны дугаар давхцаж байна", })
                AlertMessage(`Утасны дугаар давхцаж байна`, 'warning')
                return
            }

            AlertMessage(`Хүсэлт амжилтгүй`, 'warning')
            
        }finally{
            NProgress.done()
        }
    }

    const onChangeHandle = (name, value, addition) =>{
        // setValue(name, name==="phone"? parseInt(value) :value)
        setValue(name, value)
        clearErrors()
    }

    console.log('state', state);

  return( 
    <Container className="container" page={step}>
        <div className="header">
            <Link href="/">
                <a>
                    <div className="logo_par">
                        <img src="/img/logo_main.png" alt="bagshinfo_logo" />
                    </div>
                </a>
            </Link>
        </div>
       
        <div className="bodys">
            <div className="main_content" >
                <div className="title">Бүртгүүлэх</div>
                <div className="_level">
                    <div className="custom_level solo">
                        <div className="arrow_custom">
                            <div className="line"/>
                            <svg className="_custom" viewBox="0 0 15 29"><path d="m.707.707 13.678 13.678-13.678 13.677" fill="none" stroke="currentColor"></path></svg>
                        </div>
                    </div>

                    <div className="custom_level Active">
                        <div className="number">
                            1
                        </div>
                        <div className="arrow_custom">
                            <div className="line"/>
                            <svg className="_custom" viewBox="0 0 15 29"><path d="m.707.707 13.678 13.678-13.678 13.677" fill="none" stroke="currentColor"></path></svg>
                        </div>
                    </div>

                    <div className="custom_level">
                        <div className="number">
                            2
                        </div>
                        <div className="arrow_custom">
                            <div className="line"/>
                            <svg className="_custom" viewBox="0 0 15 29"><path d="m.707.707 13.678 13.678-13.678 13.677" fill="none" stroke="currentColor"></path></svg>
                        </div>
                    </div>

                    <div className="custom_level number_solo">
                        <div className="number">
                            3
                        </div>
                        {/* <div className="arrow_custom">
                            <div className="line"/>
                            <svg className="_custom" viewBox="0 0 15 29"><path d="m.707.707 13.678 13.678-13.678 13.677" fill="none" stroke="currentColor"></path></svg>
                        </div> */}
                    </div>

                    {/* <div className="custom_level solo">
                        <div className="arrow_custom">
                            <div className="line"/>
                            <svg className="_custom" viewBox="0 0 15 29"><path d="m.707.707 13.678 13.678-13.678 13.677" fill="none" stroke="currentColor"></path></svg>
                        </div>
                    </div> */}
                    
                </div>

                <div className="slice_par">

                    <form onSubmit={handleSubmit(onSubmit)} className="inputs_body">
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
                                placement="topRight"
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
                        <MainButtonStyle className="custom">Бүртгүүлэх <BsArrowRight /></MainButtonStyle>
                    </form>


                    <form onSubmit={handleSubmit(onSubmitStep2)} className="inputs_body">
                        <div className="custom_row">
                            <div className="input_par">
                                <div className="label">Нүүр зураг </div>
                                <Upload
                                    multiple={false}
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                    onChange={e => uploadHandle(e, 'profile_image')}
                                >
                                    {state.profile_image?.url ? <img src={ process.env.serverUrl + state.profile_image?.url} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            </div>
                            <div className="input_par">
                                <div className="label">Дэвсгэр зураг</div>
                                <Upload
                                    multiple={false}
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                    onChange={e => uploadHandle(e, 'cover_image')}
                                >
                                    {state.cover_image?.url ? <img src={process.env.serverUrl + state.cover_image?.url} alt="avatar" style={{ width: '100%' }} /> : uploadButton2}
                                </Upload>
                            </div>
                        </div>

                        <div className="input_par">
                            <div className="label">Товч танилцуулга <span className="required">*</span></div>
                            <CkEditor data={state.short_presentation} setValue={onChangeHandle}  />
                        </div>

                        
                        <MainButtonStyle className="custom">Хадгалах <BsArrowRight /></MainButtonStyle>
                    </form>

                </div>

                
                
                
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
                max-width: 100%;
                width: 100%;
            }
            .slice_par{
                display:grid;
                grid-auto-flow:column;
                grid-auto-columns:100%;
                overflow:hidden;
                // overscroll-behavior-inline:contain;
                ::-webkit-scrollbar {
                    display:none;
                }
                .inputs_body{
                    transition:all 0.3s ease;
                    transform:translateX(-${props=>props.page}00%);
                    width:100%;
                    height:100%;
                }
                
            }
            .custom_row{
                display:grid;
                grid-auto-flow:column;
                grid-auto-columns:50%;
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
                    font-size:12px;
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
                font-size:18px;
                color:${props=>props.theme.textColor};
                font-weight:${props=>props.theme.weight};
            }
            ._level{
                display:flex;
                align-items:center;
                padding:16px 0px;
                margin-bottom:20px;
                justify-content:space-between;
                .custom_level{
                    display:flex;
                    align-items:center;
                    // margin-right:12px;
                    width:30%;
                    .number{
                        border:1px solid #d2dcf5;
                        color:#d2dcf5;
                        font-size:14px;
                        width:35px;
                        min-width:35px;
                        height:35px;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        border-radius:50%;
                        font-weight:${props=>props.theme.weight};
                    }

                    .arrow_custom{
                        position:relative;
                        height:14px;
                        width:100%;
                        .line{
                            height:1px;
                            background-color:#d2dcf5;
                            position:absolute;
                            left:0;
                            width:100%;
                            top:45%;
                        }
                        ._custom{
                            width:7px !important;
                            color:#d2dcf5;
                            position:absolute;
                            top:0;
                            right:0;
                            stroke-width: 2px;
                        }
                    }

                }
                .solo{
                    width:40px;
                }
                .number_solo{
                    width:35px;
                    min-width:35px;
                    margin-right: 0px;
                }
                .Active{
                    .number{
                        border:1px solid ${props=>props.theme.textColor3};
                        color:${props=>props.theme.textColor3};
                    }
                    .arrow_custom{
                        .line{
                            background-color:${props=>props.theme.textColor3};
                        }
                        ._custom{
                            color:${props=>props.theme.textColor3};
                        }
                    }
                    
                }

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
            padding:10px 0px;
            img{
                width:90px;
                height:auto;
                object-fit:contain;
            }
        }
    }
   
    
`