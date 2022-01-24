import React, { useRef } from 'react'
import styled from 'styled-components'
import ProfileCard from '@/components/cards/ProfileCard'


const Slider = ({ setProfile, data, profile }) => {
    const ScrollHandle = (where) =>{
        let el = document.getElementById("myel");
        if(where === "right"){
            el.scrollLeft += 200;
        }else{
            el.scrollLeft -= 200;
        }
    }

    const ItemActive = (data, ref) =>{
        setProfile(data)
        window.scrollTo(0, 0)
        let el = document.getElementById("myel");
        if ((el.scrollLeft + 800) < ref.current.offsetLeft){
            el.scrollLeft += 420;
        }else if (el.scrollLeft+400 > ref.current.offsetLeft){
            el.scrollLeft -= 420;
        }
    }

    return (
        <Container className="container">

            <div className="slider_parent">
                <div className="arrow" onClick={_=>ScrollHandle('left')}>
                    <svg viewBox="0 0 13 38" width="13" height="38"><path d="M12 1L2 19l10 18" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd"></path></svg>
                </div>
                <div id="myel" className="slide_contents"  >
                    {data.map((el,ind)=>{
                        return(
                            <React.Fragment key={ind}>
                                <ProfileCard profile={profile} clickHandle={ItemActive} data={el} />
                            </React.Fragment>
                        )
                    })}
                </div>
                <div onClick={_=>ScrollHandle('right')} className="arrow rotate">
                    <svg viewBox="0 0 13 38" width="13" height="38"><path d="M12 1L2 19l10 18" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd"></path></svg>
                </div>
            </div>
        </Container>
    )
}

export default Slider

const Container = styled.div`
    ${({theme})=>`
        margin-bottom:100px;
        .slider_parent{
            width:100%;
            display:flex;
            justify-content:space-between;
            .slide_contents{
                scroll-behavior: smooth;
                display: flex;
                width:100%;
                max-width:100%;
                overflow-x:auto;
                ::-webkit-scrollbar {
                    display:none;
                }
                .custom{
                    margin-right:18px;
                    opacity:0.5;
                    &:hover{
                        opacity:1;
                    }
                }
                .active{
                    opacity:1;
                    border:2px solid ${theme.textColor3};
                }
            }
            .arrow{
                transition:all 0.25s ease;
                min-width: 40px;
                min-height: 100%;
                color: ${theme.mainColor};
                cursor: pointer;
                display:grid;
                align-items:center;
                justify-content:center;
                svg{
                    font-size:30px;
                }
                &:hover{
                    background-color:${theme.hoverBackground};
                }
            }
            .rotate{
                transform:rotate(180deg);
            }
        }
    `}
`

