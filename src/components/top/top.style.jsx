import styled from 'styled-components';
import { css } from 'styled-components';

export const TopContainer = styled.div`
padding : 1% 2%;
overflow-x:hidden;
background-color: #e1dfdd;
margin-bottom:0;
display:flex;
flex-direction:column;
justify-content:space-between;
@media screen and (max-width: 992px) {
  display:flex;
  flex-direction:column;
}
`
const Shared = css`
    height: 80%;
    width:100vw;
    font-family: 'Fira Sans', sans-serif;
    font-family: 'Heebo', sans-serif;
    font-size: 5.6rem;
    font-weight: 700;
    line-height:6vh;  
    padding-top:2%;
    @media screen and (max-width: 992px) {
      height:35%;
      width:100%;
      font-size:3rem;
      font-weight: 500;
      display: flex;
      margin-bottom:2%;
      flex-direction:column;
      margin-left:0;
      margin-top:20vh;
      line-height:4vh; 
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

export const LeftHeadContainer = styled.h1`
   ${Shared},
   text-align:left;
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
  border:2px solid black;
  height: 30vh;
  width:40%;
  @media screen and (max-width: 992px) {
    width:60%;
  }
`

