import React from 'react';
import styled from 'styled-components';
import Link from "next/link"
import { useForm } from "react-hook-form"
import { setCookie } from "nookies";
import {  MainButtonStyle } from "@/miscs/CustomStyle"
import axios from '@/global/axiosbase';
import NProgress from 'nprogress';
import AlertMessage from '@/miscs/AlertMessage';
import Router from 'next/router'

const Login = () => {
    const { register, handleSubmit, formState: { errors }, clearErrors, reset, setValue, watch, setError } = useForm({
        defaultValues: {
            identifier: null,
            password: null
        }
    });
    const state = watch()

    const onSubmit =_=> {
        console.log(state)
        NProgress.start()
        axios.post(`/auth/local`, state ).then(res=>{
            console.log(`res`, res)
            setCookie( null, 'jwt', res.data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            setCookie( null, 'user_id', res.data.user?.id, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            setCookie( null, 'username', res.data.user?.username, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            AlertMessage('Амжилттай нэвтэрлээ', 'success')
            Router.push('/')

        }).catch(_=>{
            AlertMessage('Нэвтрэх нэр юмуу нууц үг буруу байна!', 'warning')
        }).finally(_=>{
            NProgress.done()
        })
    };

    

    const onChangeHandle = ( name, e) =>{
        setValue(name, e)
        clearErrors()
    }


  return( 
    <Container className="container">
        <Link href="/">
            <a>
                <div className="logo_par">
                    <img src="/img/logo_main.png" alt="bagshinfo_logo" />
                </div>
            </a>
        </Link>
        

        <div className="bodys">
            <form onSubmit={handleSubmit(onSubmit)} className="main_content">
                <div className="title">Нэвтрэх</div>
                <div className="inp_par">
                    <input
                        { ...register('identifier', { required: 'Email - ээ оруулна уу' }) }
                        type="email"
                        onChange={e=>onChangeHandle('identifier', e.target.value)}

                        className={errors.identifier?.message?`my_inp err_style`:`my_inp`}
                        placeholder="Емэйл ээр нэвтэрнэ үү "
                    />
                    {errors.identifier?.message&&<span className="err_text">{errors.identifier?.message}</span>}
                </div>

                <div className="inp_par">
                    <input 
                        { ...register('password', { required: 'Нууц үгээ оруулна уу' }) }
                        type="text"
                        onChange={e=>onChangeHandle('password', e.target.value)}
                        className={errors.password?.message?`my_inp err_style`:`my_inp`}
                        placeholder="Нууц үг" 
                    />
                    {errors.password?.message&&<span className="err_text">{errors.password?.message}</span>}
                </div>
                

                <div className="custom_handle"></div>
                <MainButtonStyle className="custom">Нэвтрэх</MainButtonStyle>

                <div className="or_line">
                    <span className="orr">эсвэл</span>
                </div>

                <div className="gmail_botton">
                    <img src="https://assets.toptal.io/assets/front/static/platform/icons/social/google_30739e.svg" alt='bagshinfo' />
                    <span>Емэйл - ээр нэвтрэх</span>
                </div>
            </form>

        </div>
    </Container>
  )
};

export default Login;


const Container = styled.div`
    .bodys{
        width:100%;
        display:flex;
        justify-content:center;
        .main_content{
            // max-width: 600px;
            max-width: 400px;
            width: 100%;
            .gmail_botton{
                display:flex;
                align-items:center;
                justify-content:center;
                border: 1px solid rgba(0,0,0,0.1);
                padding: 16px 20px;
                font-weight:${props=>props.theme.weight};
                cursor:pointer;
                transition:all 0.2s ease;
                img{
                    line-height: 13px;
                    margin-right:15px;
                }
                &:hover{
                    border: 1px solid #c4c6ca;
                }
            }
            .or_line{
                text-align:center;
                padding:30px 0px;
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
            .custom{
                width:100%;
                padding:17px 0px;
            }
            .inp_par{
                margin-bottom:30px;
                position:relative;
                .my_inp{
                    font-weight:${props=>props.theme.weight};
                    border: 1px solid #d8d9dc;
                    border-radius: 0;
                    background: #fff;
                    font-size: 14px;
                    color: #455065;
                    padding: 20px;
                    transition: all .2s;
                    width: 100%;
                    outline: none;
                    -webkit-appearance: none;
                    ::placeholder{
                        color:${props=>props.theme.textColor4};
                    }
                    &:focus{
                        border: 1px solid ${props=>props.theme.textColor3};
                    }
                }
                .err_style{
                    border:1px solid #dc3c1e !important;
                    color:#dc3c1e !important;
                }
                .err_text{
                    position:absolute;
                    top:105%;
                    right:0;
                    font-size:11px;
                    color:red;
                    font-weight:${props=>props.theme.weight};
                }
            }
            
            .title{
                font-size:28px;
                color:${props=>props.theme.textColor};
                margin-bottom:30px;
                font-weight:${props=>props.theme.weight};
            }
        }
    }
    .logo_par{
        cursor:pointer;
        padding:10px 0px;
        img{
            width:90px;
            height:auto;
            object-fit:contain;
        }
    }
`