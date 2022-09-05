import styled from 'styled-components';
import { css } from 'styled-components';
// #e1dfdd
export const TopContainer = styled.div`
height:119vh;
padding:0;
overflow-x:hidden;
background: black;
margin-bottom:0;
display:flex;
flex-direction:column;
justify-content:space-between;

@media screen and (max-width: 992px) {
  height:120vh;
  display:flex;
  flex-direction:column;
}
`
const Shared = css`
    height: 90vh;
    top:0;
    width:100vw;
    background-color: rgba(0, 0, 0, .6);
    left:0;
    font-family: 'Zilla Slab', serif;
    font-size: 94px;
    font-weight: 700;
    padding-top:15vh;
    margin:0 112.5px 0 0;
    padding-left: 112.5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      line-height:0.5;  
      height:75vh;
      width:100%;
      font-size:56px;
      font-weight: 500;
      display: flex;
      flex-direction:column;
      margin-left:0;
      padding-left: 30px;
      padding-top:25vh;
    }
`

export const Div = styled.div`
  width:40%;
  height:100vh;
  @media screen and (max-width: 992px) {
    width:100%;
    height:55%;
  }
`

export const LeftHeadContainer = styled.div`
   ${Shared},
   text-align:left;
   color:#fff;
   display:flex;
   flex-direction: column;
   margin-bottom:0
    `

export const RightHeaderContainer = styled.h1`
  ${Shared};
  width:100%;
  padding-right : 20px;
  text-align:right;
`

export const Span = styled.span`
    background-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
}
`

export const Image = styled.img`
  height: auto;
  width:40%;
  @media screen and (max-width: 992px) {
    width:80%;
  }
`

