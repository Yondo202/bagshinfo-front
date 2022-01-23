import React, { useState } from 'react';
import styled from 'styled-components';

const Menucards = () => {
  const [ datas, setDatas ] = useState(data)

  const HoverHandle = (item) =>{
    setDatas(prev=>[...prev.map(el=>{
      if(el.title === item){
        return {...el, cond:'2'}
      }else{
        return {...el, cond:''}
      }
    })])
  }

  return (
        <Container className="container">
            <div className="content_parent">
                {datas.map((el,ind)=>{
                  return(
                    <div key={ind} onMouseOut={_=>HoverHandle('')} onMouseOver={_=>HoverHandle(el.title)} className="content">
                        <img src={`/img/${el.cond}${el.url}`} alt="bagshinfo" />
                        
                        <div className="title">{el.title}</div>
                        <div className="desc">Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.</div>

                        <div className={`view ${el.cond?`opacity`:``}`}>
                          Цааш үзэх
                          <svg className="_3HFXXekl" viewBox="0 0 12 8"><g stroke="currentColor" fill="none" fillRule="evenodd"><path d="M0 3.607h11.253M8 .107l3.5 3.5-3.5 3.5"></path></g></svg>
                        </div>
                    </div>
                  )
                })}
            </div>
        </Container>
  )
};

export default Menucards;

const data = [
    {title:'Гэрээр заах', url:"home.svg", cond:''},
    {title:'Сургалтын төвд', url:"class.svg", cond:''},
    {title:'Байршилаар хайх', url:"map.svg", cond:''}
]


const Container = styled.div`
    ${({theme})=>`
      .content_parent{
          width:100%;
          display:grid;
          grid-template-columns: 1fr 1fr 1fr;
          .content{
            cursor:pointer;
            grid-template-columns:1;
            padding:40px;
            background-color:${theme.background2};
            color:${theme.textColor};
            transition:all 0.2s ease;
            .view{
              font-size:17px;
              padding:14px 0px;
              display:flex;
              justify-content:space-between;
              align-items:center;
              opacity:0;
              svg{
                width:14px;
              }
            }
            .opacity{
              opacity:1;
            }
            img{
              width: 64px;
              height: 64px;
              margin-bottom:0.8rem;
            }
            .title{
              font-size:20px;
              margin-bottom:1.3rem;
            }
            .desc{
              font-size:15px;
            }
            &:hover{
              background-color:${theme.textColor3};
              color:#fff;
            }
          }
      }
    `}
`

